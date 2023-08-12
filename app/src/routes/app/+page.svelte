<script>

    let value = 99;
    async function getUser(){
        const res = await fetch('/api/user', {
            method: 'GET'
        })
        const data = await res.json();
        console.log(data);
        value = data.x || 0;
    }
</script>

<h1>App</h1>
<h2>{value}</h2>
<button on:click={getUser}>Get Data</button>