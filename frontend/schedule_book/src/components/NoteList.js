import React from 'react'
import { Icon, List } from 'antd';

function NoteList(props) {
    // const data = [
    //     'Racing car sprays burning fuel into crowd.',
    //     'Japanese princess to wed commoner.',
    //     'Australian walks 100km after outback crash.',
    //     'Man charged over missing wedding girl.',
    //     'Los Angeles battles huge wildfires.',
    // ];

    return (
        <div>
            <h3 style={{ fontSize: "x-large", textAlign: "center" }}>Notes</h3>
            <List
                split={false}
                bordered={false}
                dataSource={props.data}
                renderItem={item => (<List.Item><Icon type="caret-right" />{item.note}</List.Item>)}
            />
        </div>

    )
}

export default NoteList