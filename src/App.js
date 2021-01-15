import logo from './logo.svg';
import './App.css';
import SplitPane, { Pane } from 'react-split-pane';

function App() {

  //const elements = ['one', 'two', 'three'];

  const items = []
  items.push(<li key="x">Dude how will this wrap if it is to long</li>)
  for(var i=0; i<300; i++){
    items.push(<li key={i}>{i}</li>)
  }



  /*for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
  }*/


  return (
    <div className="App">
      <SplitPane split="vertical" defaultSize={300} allowResize={false}>
        <Pane className="navPane" > 
          <div className="paneScoller">
            <br/>
            <div className="NavCompanyName">Docula</div><br/>docs-like-code: simple
            <hr/>
            {items}
          </div>
        </Pane>
 
        <Pane className="paneScoller">
          Using a Pane allows you to specify any constraints directly
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          END
        </Pane>
      </SplitPane>
      
    </div>
  );
}

export default App;
