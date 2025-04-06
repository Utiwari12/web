function fetchPostData() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data fetched");
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Comment data fetched .");
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();

        const [blogData,commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ])
        console.log("Blog data fetched successfully",blogData);
        console.log("Comment data fetched successfully",commentData);
    } catch (error) {
        console.error("Error fetching blog data",error);
    }
}

getBlogData();
