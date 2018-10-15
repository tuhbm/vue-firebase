<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br/>
        <input type="password" v-model="password" placeholder="Password"><br/>
        <button @click="login">로그인</button>
        <p>계정이 없습니까? <router-link to="/signup">가입</router-link>이 가능합니다.</p>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    alert(`로그인 되었습니다.`)
                },
                function(err) {
                    alert(`로그인실패 ${err.message}`)
                }
            )
        }
    }
};
</script>

<style scoped>
    .login {
        margin-top:40px;
    }
    input {
        margin:10px 0;
        width:20%;
        padding:15px;
    }
    button {
        margin-top:20px;
        width:10%;
        cursor:pointer;
    }
    p {
        margin-top:40px;
        font-size:13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>