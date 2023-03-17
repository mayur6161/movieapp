import logo from './logo.svg';
import './App.css';
import MovieData from './components/moviedata.json'

function App() {
    return (< >
        <h1 className="App">Movie Shop</h1>

        <div style={{height: "40px", width: "100%"}}></div>

        <div style={{marginLeft: "110px"}}>
            {MovieData.map((data, key) => {
                return (<div style={{width: "33%", float: "left"}} key={key}>
                    <img style={{width: "70%", height: "400px", alignContent: "space-between"}}
                         src={data.Poster} alt={data.Title}/>
                    <p style={{fontSize: "22px", fontWeight: "bold", color: "green"}}>{data.Title}</p>
                    <div style={{height: "40px", width: "100%",}}></div>

                </div>);
            })}
        </div>

        <div style={{marginLeft: "110px"}}>
            {MovieData.map((data, key) => {
                return (<div style={{width: "33%", float: "left"}} key={key}>
                    <img style={{width: "70%", height: "400px", alignContent: "space-between"}}
                         src={data.Poster} alt={data.Title}/>
                    <p style={{fontSize: "22px", fontWeight: "bold", color: "green"}}>{data.Title}</p>
                    <div style={{height: "40px", width: "100%",}}></div>

                </div>);
            })}
        </div>




    </>);
}






export default App;
