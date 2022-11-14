<template>
    <div id="loader">
        <div class="logo_animation">
            <img class="logo1" alt="logo admt" src="../assets/logo1.png">
            <img class="logo2" alt="logo admt" src="../assets/logo2.png">
            <img class="logo3" alt="logo admt" src="../assets/logo3.png">
            <img class="logo4" alt="logo admt" src="../assets/logo4.png">
            <img class="logo5" alt="logo admt" src="../assets/logo5.png">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="ebenisterie">Ébenisterie</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

#loader{
    z-index: 10;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #D6B285;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: 500ms;
    animation-delay: 1.5s;
    animation-name: fade;  
    animation-timing-function: ease;   
    animation-fill-mode: forwards;
    .logo_animation{
        position: relative;
        width: 500px;
        height: 217px;
        z-index: 10;
        background-color: #D6B285;
        .logo1{
            position: absolute;
            z-index: 12;
            width: 100%;
            height: 100%;
            top:0;
            left: 0;
        }
        .logo2{
            position: absolute;
            z-index: 12;
            width: 100%;
            top: -12px;
            left: 0;
            animation-duration: 700ms;
            animation-name: logo;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards; 
        }
        .logo3{
            position: absolute;
            z-index: 12;
            width: 100%;
            top:-24px;
            left: 0;
            animation-duration: 700ms;
            animation-name: logo;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards; 
        }    
        .logo4{
            position: absolute;
            z-index: 12;
            width: 100%;
            top: -6.7px;
            left: 4.7px;    
            animation-duration: 700ms;
            animation-name: logo;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards;         
        }
        .logo5{
            position: absolute;
            z-index: 12;
            width: 100%;
            top: 12px;
            left: 0; 
            animation-duration: 700ms;
            animation-name: logo;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards;      
        }   
        .line1{
            position: absolute;
            z-index: 11;
            border: solid 0.5px black;
            top: 125px;
            left: -40px;
            animation-duration: 1s;
            animation-name: line1;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards;            
        } 
        .line2{
            position: absolute;
            z-index: 11;
            border: solid 0.5px black;
            top: 0;
            left: 16px;
            width: 220px;
            transform-origin: 0 0;
            transform: rotate(60deg); 
            animation-duration: 1s;
            animation-name: line2;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards;                      
        }
        .line3{
            position: absolute;
            z-index: 11;
            border: solid 0.2px black;
            top: 65px;
            left: 425px;
            transform-origin: 0 0;
            transform: rotate(45deg);            
            animation-duration: 1s;
            animation-name: line3;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards;            
        }
        .line4{
            position: absolute;
            z-index: 11;
            border: solid 0.1px black;
            bottom: 120px;
            left: 157px;            
            animation-duration: 1s;
            animation-name: line4;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards;           
        }    
        .ebenisterie{
            position: absolute;
            font-size: 1.2em;
            right: 3px;
            top: 15px;
            letter-spacing : 2.2px;
            animation-duration: .5s;
            animation-name: eben;  
            animation-timing-function: ease;   
            animation-fill-mode: forwards;
            animation-delay: 700ms;
        }                
    }
    
}

@keyframes logo {
    100% { top: 0px; left: 0px}
}

@keyframes line1 {
    0%{
        width: 0;
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    100%{
        width: 523px;
    }
}

@keyframes line2 {
    0%{
        width: 0;
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    100%{
        width: 220px;
    }
} 

@keyframes line3 {
    0%{
        width: 0;
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    100%{
        width: 83px;
    }
}

@keyframes line4 {
    0%{
        height: 0;
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    100%{
        height: 42px;
    }
}

@keyframes eben {
    0%{
        top: 15px;
    }
    100%{
        top: -20px;
    }
}

@keyframes fade {
    0%{
        z-index: 10;
    }
    100%{
        opacity: 0%;
        z-index: -10;
    }
}

</style>
