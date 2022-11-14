<template>
    <header>
        <nav>
            <div class="branding">
                <img src="@/assets/logo-admt.png" alt="logo admt">
            </div> 
            <ul class="navigation">
                <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
                <li><router-link class="link" :to="{name:'about'}">Contact</router-link></li>
            </ul>          
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    header {
        background-color: #D6B285;
        z-index: 2;
        width: 100%;
        position: fixed;
        nav{
            display: flex;
            position: relative;
            flex-direction: row;
            width: 80%;
            margin: 0 auto;
            padding: 1em;
            ul, .link{
                font-weight: 500;
                color: white;
                list-style: none;
                text-decoration: none;
            }
            li{
                text-transform: uppercase;
                padding: 16px;
            }
            .link{
                font-size: 14px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                transition: .5s ease all;
                &:hover{
                    color: #9039fc;
                    border-color: #9039fc;
                }
            }            
            .branding{
                display: flex;
                align-items: center;
                img{
                    width: 100px;
                }
            }
            .navigation{
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }
        }

    }
    
</style>