console.log('testjs')
$(() => {
    var $test1 = $( '#test1' ),
        $test2 = $( '#test2' ),
        $test3 = $( '#test3' )
        $test2.click(() =>{
            alert(2222)
        })
        $test3.click(() =>{
            alert(3333)
        })

})