const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);

        console.log('evento ativo!');
    }

    const renderSomething = (x) => {

        if (x) {
            return <h1>Render 1 </h1>
        } else {
            return <h1>Render 2</h1>
        }
    }

    return (
        <div>
            <div>
            <button onClick={handleMyEvent}>Me clique</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

};

export default Events;