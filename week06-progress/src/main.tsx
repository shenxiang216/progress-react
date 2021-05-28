import Progressbar from './components/Progressbar.js'
class App extends React.Component<any> {
    render() {
        return (
            <React.Fragment>
                <Progressbar nums={20} data={0} ></Progressbar>
                <Progressbar nums={20} data={20} ></Progressbar>
                <Progressbar nums={20} data={30} ></Progressbar>
                <Progressbar nums={20} data={50} ></Progressbar>
                <Progressbar nums={20} data={70} ></Progressbar>
                <Progressbar nums={20} data={80} ></Progressbar>
                <Progressbar nums={20} data={100} ></Progressbar>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'))