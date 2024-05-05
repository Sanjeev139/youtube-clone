import React from 'react'

const commentsData = [
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": [
            {
                "name": "Sanjeev",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "replies": []
            },
            {
                "name": "Sanjeev",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "replies": []
            },
            {
                "name": "Sanjeev",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "replies": []
            },
            {
                "name": "Sanjeev",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "replies": [
                    {
                        "name": "Sanjeev",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        "replies": []
                    },
                    {
                        "name": "Sanjeev",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        "replies": [
                            {
                                "name": "Sanjeev",
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                "replies": []
                            },
                        ]
                    },
                    {
                        "name": "Sanjeev",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        "replies": []
                    },
                ]
            },
        ]
    },
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": [
            {
                "name": "Sanjeev",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "replies": []
            },
            {
                "name": "Sanjeev",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "replies": [
                    {
                        "name": "Sanjeev",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        "replies": []
                    },
                    {
                        "name": "Sanjeev",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        "replies": [
                            {
                                "name": "Sanjeev",
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                "replies": []
                            },
                        ]
                    },
                ]
            },
            {
                "name": "Sanjeev",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                "replies": []
            },
        ]
    },
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },{
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },{
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },
    {
        "name": "Sanjeev",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "replies": []
    },
]

const Comment = ({data}) => {
    const { name, text } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
            <img alt='user' className='w-12 h-8' src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'></img>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p className='font-serif'>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({comments}) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment}></Comment>
            <div className='pl-5 border ml-5 border-l-black'>
                <CommentList comments={comment.replies}></CommentList>
            </div>
        </div>
    ))
}


const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentList comments={commentsData}></CommentList>
    </div>
  )
}

export default CommentContainer
