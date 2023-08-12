<script>
    import '$lib/firebase.js';
    import { USER } from '$lib/stores/user.js'
    import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";

    const auth = getAuth();

    function googleSignIn(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    onAuthStateChanged(auth, (user)=>{
        $USER = user;
    });
</script>

<h1>X-Calibur</h1>
<hr>


{#if $USER}
    <div id="page-wrapper">
        <img src={$USER.photoURL} alt="">
        <h3>{$USER.displayName}</h3>
        <slot />
    </div>
{:else}
    <div id="login-box">
        <button on:click={googleSignIn}>Google Sign In</button>
    </div>
{/if}

<!-- <pre><code>{JSON.stringify($USER, null, 2)}</code></pre> -->
