import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Divider } from 'antd'
import Schedule from '../components/Schedule' 
// import data from '../testdata'
import TodoList from '../components/TodoList';
import NoteList from '../components/NoteList';
import axios from 'axios';
import { connect } from 'react-redux';

class SBookDetailView extends React.Component {
    constructor() {
        super()
        this.state = {
            daycardId: 0,
            date: "",
            summary: "",
            detailArrangements: {
                morningThings: [],
                afternoonThings: [],
                eveningThings: []
            },
            todoItems: [],
            notes: []
        }
        this.classifyArrangements = this.classifyArrangements.bind(this)
    }

    classifyArrangements(res) {
        for(let i=0; i<res.data.length; i++) {
            switch(res.data[i].item_duration) {
                case "M":
                    this.setState(prevState => {
                        let arrangements = prevState.detailArrangements.morningThings
                        arrangements.push(res.data[i])
                        return {
                            detailArrangements: {
                                ...prevState.detailArrangements,
                                morningThings: arrangements
                            }
                        }
                    })
                    break
                case "A":
                    this.setState(prevState => {
                        let arrangements = prevState.detailArrangements.afternoonThings
                        arrangements.push(res.data[i])
                        return {
                            detailArrangements: {
                                ...prevState.detailArrangements,
                                afternoonThings: arrangements
                            }
                        }
                    })
                    break
                case "E":
                    this.setState(prevState => {
                        let arrangements = prevState.detailArrangements.eveningThings
                        arrangements.push(res.data[i])
                        return {
                            detailArrangements: {
                                ...prevState.detailArrangements,
                                eveningThings: arrangements
                            }
                        }
                    })
                    break
                default:
                    break
            }
        }
    }

    // componentWillReceiveProps(newProps) {
    componentDidMount(newProps) {
        console.log(newProps)
        // if (newProps) {
        if (true) {
            // axios.defaults.headers = {
            //     "Content-Type": "application/json",
            //     Authentication: newProps.token
            // }
        
            let sid = this.props.match.params.scheduleId
            axios.get(`http://127.0.0.1:8000/api/schedules/days/${sid}/`)
            .then(res => {
                this.setState({
                    daycardId: res.data.id,
                    date: res.data.create_date
                })

                axios.get(`http://127.0.0.1:8000/api/schedules/arrangements/daykey/${this.state.daycardId}/`)
                .then(res => this.classifyArrangements(res))

                axios.get(`http://127.0.0.1:8000/api/schedules/todos/daykey/${this.state.daycardId}/`)
                .then(res => {
                    this.setState({
                        todoItems: res.data
                    })
                })

                axios.get(`http://127.0.0.1:8000/api/schedules/notes/daykey/${this.state.daycardId}/`)
                .then(res => {
                    this.setState({
                        notes: res.data
                    })
                })
            })    

        }
    }


    render() {
        return (
            <div>
                <Row>
                    <Col span={11}>
                        <Schedule data={this.state}/>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={1}>

                        {/* <Divider 
                            type="vertical" 
                            orientation="center"
                            style={{width: "1px", height: "150px"}}
                        /> */}

                    </Col>
                    <Col span={11}>
                        <TodoList data={this.state.todoItems} />
                        <Divider />
                        <NoteList data={this.state.notes}/>
                    </Col>
                </Row>


                <h3 style={{fontSize: "x-large", textAlign: "center"}}>Summary: </h3>
                <p style={{fontSize: "large", fontWeight: "bold"}}>{this.state.summary}</p>
                <div style={{textAlign: "center"}}>
                    <Button type="primary" style={{textAlign: "center"}}>
                        <Link to='/'>Back</Link>
                    </Button>
                </div>
            </div>
                
        )
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    }
}

export default connect(mapStateToProps)(SBookDetailView);