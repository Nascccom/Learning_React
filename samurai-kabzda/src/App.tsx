import React, {useState} from 'react';
import './App.css';
import {RatingValuesType} from './Components/ControlledRaiting/ControlledRaiting';
import {UncontrolledOnOff} from './Components/UncontrolledOnOff/UncontrolledOnOff';


function App() {

    const [rating, setRating] = useState<RatingValuesType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
      <div>
          {/*<ControlledAccordion titleValue={'Menu1'}*/}
          {/*          collapsed={accordionCollapsed}*/}
          {/*          setCollapsed={setAccordionCollapsed}/>*/}
          {/*<ControlledOnOff status={switchOn} onChange={(on)=> {setSwitchOn(on)}}/>*/}

          {/*<ControlledAccordion titleValue={'Users'} collapsed={true}/>*/}
          {/*<ControlledRating value={rating}*/}
          {/*         onClick={setRating}/>*/}
          {/*<ControlledRating value={2}/>*/}
          {/*<ControlledRating value={3}/>*/}
          {/*<ControlledRating value={4}/>*/}
          {/*<ControlledRating value={5}/>*/}
          {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
          {/*<UncontrolledAccordion titleValue={'Users'}/>*/}

          {/*<UncontrolledRating/>*/}

          <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
          {/*<UncontrolledOnOff />*/}

      </div>);
}






type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <h1>{props.title}</h1>
}

function Header() {
    console.log('Header rendered')
    return (
      <div>
          <a href="#">Home</a>
          <a href="#">Home2</a>
          <a href="#">Home3</a>
      </div>
    );
}

export default App;
