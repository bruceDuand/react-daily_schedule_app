const data = [
    {
        id: 1,
        date: "2019/1/1",
        summary: "first day",
        detailArrangements: {
            morningThings: [
                {
                    itemId: 1,
                    itemName: "getup",
                    isfinished: "true"
                },
                {
                    itemId: 2,
                    itemName: "wash clothes",
                    isfinished: "true"
                },
                {
                    itemId: 3,
                    itemName: "breakfast",
                    isfinished: "false"
                }
            ],
            afternoonThings: [
                {
                    itemId: 1,
                    itemName: "sleep",
                    isfinished: "true"
                }
            ],
            eveningThings: [
                {
                    itemId: 1,
                    itemName: "homework",
                    isfinished: "true"
                },
                {
                    itemId: 2,
                    itemName: "sleep",
                    isfinished: "true"
                },
                {
                    itemId: 3,
                    itemName: "excersize",
                    isfinished: "false"
                }
            ]
        },
        todoItems: [
            {
                todoItemId: 1,
                todoItemName: "Finish homework",
                isfinished: "true"
            },
            {
                todoItemId: 2,
                todoItemName: "Wash clothes",
                isfinished: "true"
            }
        ],
        notesList: [
            {
                noteId: 1,
                note: "need to finish application form tomorrow"
            },
            {
                noteId: 2,
                note: "buy some books back"
            }
        ]
    },
    {
        id: 2,
        date: "2019/1/2",
        summary: "second day"
    },
    {
        id: 3,
        date: "2019/1/3",
        summary: "third day"
    },
    {
        id: 4,
        date: "2019/1/4",
        summary: "forth day"
    },
    {
        id: 5,
        date: "2019/1/5",
        summary: "fifth day"
    }
]

export default data