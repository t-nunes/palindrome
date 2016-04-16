
var palindrome = {
    isPalindrome: function(str) {

        /* remove special characters, spaces and make lowercase*/
        var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

        /* reverse removeChar for comparison*/
        var checkPalindrome = removeChar.split('').reverse().join('');

        /* Check to see if myString is a Palindrome*/
        return (removeChar === checkPalindrome) ? true : false;
    },

    setMessage: function($this,message){
        $this.siblings('.msg-container').text(message);
    }

}

var app = function(){

    $('.check-palindrome').on('keypress keyup keydown',function(){
        var $this = $(this),
            $msgContainer = $this.siblings('.msg-container');

        if ( palindrome.isPalindrome( $(this).val()) ){
            palindrome.setMessage($this, 'IS A PALINDROME');
            $msgContainer.removeClass('not-palindrome');
        }else{
            palindrome.setMessage($this, 'IS NOT A PALINDROME');
            $msgContainer.addClass('not-palindrome');
        }
    });

}


$(document).ready(app);