
    for(let i = 0; i < 500;i++){
        let parImpar = num => (num % 2 )== 0? " par.<br>" : " impar.<br>";
        var num = Math.floor(Math.random()* 10000);
        document.write("El número " +num+ " es "+ parImpar(num));
    }
