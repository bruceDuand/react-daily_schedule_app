import React from 'react'
import { Collapse } from 'antd'
import TodoItem from './TodoItem'

const Panel = Collapse.Panel;

class Schedule extends React.Component {

    constructor() {
        super()
        this.state = {
            activeKey: ["1", "2", "3"]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    getPanelDefaultKey = () => {
        const date = new Date()
        const hours = date.getHours()
        let panelDefaultKey

        if (hours < 12) {
            panelDefaultKey = '1'
        } else if (hours >= 12 && hours < 17) {
            panelDefaultKey = '2'
        } else {
            panelDefaultKey = '3'
        }

        return panelDefaultKey
    }

    handleChange(event) {
        const { key } = event.target
        const ind = this.state.activeKey.findIndex(key)

        console.log(ind)
        if(ind === -1)
            this.state.activeKey.push(key)
        else
            this.state.activeKey.splice(ind, 1)
    }

    // defaultActiveKey={this.getPanelDefaultKey()}

    render() {
        const itemsData = this.props.data.detailArrangements

        const morningThings = itemsData.morningThings.map(
            item => <TodoItem key={item.id} isFinished={item.isfinished} todoItem={item.item_name}/>
        )
        const afternoonThings = itemsData.afternoonThings.map(
            item => <TodoItem key={item.id} isFinished={item.isfinished} todoItem={item.item_name}/>
        )
        const eveningThings = itemsData.eveningThings.map(
            item => <TodoItem key={item.id} isFinished={item.isfinished} todoItem={item.item_name}/>
        )
        
        return (
            <div>
                <h3 style={{fontSize: "x-large", textAlign: "center"}}>Date: {this.props.data.date.match(/([0-9]*-)*[0-9]*/g)[0]}</h3>
                <Collapse bordered={false} activeKey={this.state.activeKey}>
                    <Panel 
                        header="Morning Things" 
                        key="1"
                        name="collapsed1"
                        style={{ fontSize: "large", fontWeight: "bold" }}
                    >
                        <h1>{morningThings}</h1>
                    </Panel>
                    <Panel 
                        header="Afternoon Thins" 
                        key="2"
                        name="collapsed2"
                        style={{ fontSize: "large", fontWeight: "bold" }}
                    >
                        <h1>{afternoonThings}</h1>
                    </Panel>
                    <Panel 
                        header="Evening Things" 
                        key="3"
                        name="collapsed3"
                        style={{ fontSize: "large", fontWeight: "bold" }}
                    >
                        <h1>{eveningThings}</h1>
                    </Panel>
                </Collapse>
                <br />
            </div>
        )
        
    }
}

export default Schedule
