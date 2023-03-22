import React from 'react';

const commentsData = [
    {
      name: "Akansha ",
      text: "Impressive ",
      replies: [],
    },
    {
      name: "Bob",
      text: "This is my favorite channel",
      replies: [
        {
          name: "Emily",
          text: "I am your top fan",
          replies: [],
        },
        {
          name: "Akshay",
          text: "Such creative videos you’ve on this channel. Just subscribed",
          replies: [
            {
              name: "Rohan",
              text: "I’ve never witnessed such awesome editing as this one",
              replies: [
                {
                  name: "Ahaana",
                  text: "Very well-researched and fine-made video this is",
                  replies: [
                    {
                      name: "Shaza",
                      text: "I can see that your content quality is improving. Keep it going.",
                      replies: [
                        {
                          name: "Kairshma",
                          text: "I hope this channel never ends and keeps spreading happiness. ",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "David",
                      text: "Such an inspirational video this is",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Rocky",
      text: "Feeling so inspired and positive after this video, thanks!",
      replies: [],
    },
    {
      name: "Emily",
      text: "Just shared this video with my friends and family",
      replies: [],
    },
    {
      name: "Rajat",
      text: "With such a positive video like this, you make my day",
      replies: [],
    },
    {
      name: "Sam",
      text: "The message you just shared in this video is truly touching. Agree with that.",
      replies: [],
    },
  ];
  
const Comment =({data})=>{
const {name, text, replies} = data;

return(
    <div className="flex shadow-sm bg-slate-200 p-2 rounded-2xl my-2">
        <img 
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />

        <div className="px-3">
            <p className="px-3 font-bold">{name}</p>
            <p className="px-3">{text}</p>
          
          {/* /*  <p className="flex flex-wrap">
            <img 
        className="left-10 h-7 w-7 rounded-full flex flex-wrap"
        alt="like"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdplT6KltmXdRhGs_mmJa9m1I0nu7nAPx2g&usqp=CAU"
        />
        </p>
    
        <p className="flex flex-wrap">
         <img 
        className=" right-10 w-7 h-7 rounded-full flex flex-wrap"
        alt="dislike"
        src="data:image/png;base64,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"    
         />
         </p>*/ }

</div> 
    </div>
);
};


const CommentsList =({comments}) => {
    return comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ));
}


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;
