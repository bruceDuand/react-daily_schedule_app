import React from 'react'
import { List, Card } from 'antd';
import { Link } from 'react-router-dom'
// import data from '../testdata'
import axios from 'axios';
import { connect } from 'react-redux';

class SBookListView extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    // componentWillReceiveProps(newProps) {
    componentDidMount(newProps) {
        console.log(newProps)
        // if (newProps.token) {
        if (true) {
            // axios.defaults.headers = {
            //     "Content-Type": "application/json",
            //     Authentication: newProps.token
            // }
            axios.get('http://127.0.0.1:8000/api/schedules/days/')
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
        }
       
    }

    render() {
        return (
            <List 
            grid={{gutter: 16, column: 3}}
            dataSource={this.state.data}
            renderItem={item => (
                <List.Item>
                    <Link to={'/'+item.id.toString()}>
                        <Card title={item.create_date.match(/([0-9]*-)*[0-9]*/g)[0]}>
                            {item.summary}
                        </Card>
                    </Link>                  
                </List.Item>
            )}
            />
        )

    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    }
}

export default connect(mapStateToProps)(SBookListView);