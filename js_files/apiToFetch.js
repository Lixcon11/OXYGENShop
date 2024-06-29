const sendData = async (data) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: 'foo',
                body: data,
                userId: 1,
                }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    } 
    catch (error) {
        console.log(error);
    }
}

export default sendData;