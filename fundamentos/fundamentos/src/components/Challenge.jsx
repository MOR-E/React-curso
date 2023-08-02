const Challenge = () => {
    


    const hanndleSoma = (n1, n2) => {
        n1 = 2;
        n2 = 2;
        var resultado  = n1 + n2;
        console.log(resultado);
    }

    return (

        <button onClick={hanndleSoma}>Me clique para somar</button>
    
    );
}

export default Challenge;

