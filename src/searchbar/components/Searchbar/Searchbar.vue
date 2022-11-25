<template>

<div class="main-container">
    <div class="pad-container">
      <div tabindex="1" @focus="setCaret" class="autocomplete-container">
        <span @input="sendText" @keypress="preventInput" ref="editbar" class="editable" contenteditable="true"></span>
        <span class="placeholder" contenteditable="false">{{autoComplete}}</span>    
      </div>
    </div>
  </div>
    </template>
    
    <script>
    export default {
      name: 'Autocomplete',
      data: function() {
        return {
          autoComplete: "",
          maxChars: 75,
          connection: null
        }
      },
      mounted() {
        const url = "ws://127.0.0.1:8000/"
        this.connection = new WebSocket(url);
        this.connection.onopen = () => console.log("connection established");
        this.connection.onmessage = this.receiveText;
      },
      methods: {
        setCaret() {
          const range= document.createRange()
          const sel = window.getSelection();
          const parentNode = this.$refs.editbar;
    
          if (parentNode.firstChild == undefined) {
            const emptyNode = document.createTextNode("");
            parentNode.appendChild(emptyNode);
          }
    
          range.setStartAfter(this.$refs.editbar.firstChild);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        },
        preventInput(event) {
          let prevent = false;      
    
          // handles capital letters, numbers, and punctuations input
          if (event.key == event.key.toUpperCase()) {
            prevent = true;
          }
    
          // exempt spacebar input
          if (event.code == "Space") {
            prevent = false;
          }
    
          // handle input overflow
          const nChars = this.$refs.editbar.textContent.length;
          if (nChars >= this.maxChars) {
            prevent = true;
          }
    
          if (prevent == true) {
            event.preventDefault();
          }
        },
        sendText() {
          const inputText = this.$refs.editbar.textContent;
          this.connection.send(inputText);
        },
        receiveText(event) {
          this.autoComplete = event.data;
        }
      }
    }
    </script>
    
    <style scoped>

    .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Fredoka', sans-serif;
  }

  h1 {
    font-size: 3rem;
  }

  @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
    
    .pad-container {
      padding: 0;
      position: absolute;
      width: 80%;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 12px;
      border: medium solid;
      border-color: #B4E116;
    }
    
    .autocomplete-container {
      font-family: "Crete Round";
      font-size: 16px;
      border-radius: 8px;
      height: 32px;
      width: 100%;
      text-align: left;
      position: relative;
      /* background-color: #000; */
      caret-color: #B4E116;
    }
    
    span {
      display: block;
      min-width: 1px;
      outline: none;
    }
    
    .editable {
      position: absolute;
      left: 8px;
      top: 5px;
    }
    
    .placeholder {
      color: white;
      position: absolute;
      left: 8px;
      top: 5px;
      z-index: -1;
    }
    
    @font-face {
      font-family: "Crete Round";
      src: local("Crete Round"),
       url(../../../assets/fonts/Crete_Round/CreteRound-Regular.ttf) format("truetype");
    }
    </style>