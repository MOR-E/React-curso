

const Challenge = () => {
    

    const hanndleSoma = (n1, n2) => {
        n1 = 2;
        n2 = 2;
        let resultado  = n1 + n2;
        console.log(resultado);
    }

    return (

    <div>
     
        <button onClick={hanndleSoma}>Me clique para somar</button>
    </div>
    );
}

export default Challenge;

