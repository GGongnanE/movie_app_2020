import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    // 컴포넌트가 마운트 되면 true 여야 함. 
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  // 첫번째 인자 : setTimeout(), 두번째 인자가 6000
  componentDidMount() {
    // 영화 데이터 로딩 
    this.getMovies();
   
  }

  render() {
    // 구조분해 할당으로 this.state에 있는 isLoading을 가져옴. 
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
