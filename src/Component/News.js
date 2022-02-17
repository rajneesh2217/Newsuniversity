import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

    articles = [

        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Kyle Shanahan Congratulates Samuel, Williams on 'Well Deserved' AllPro Honors | 49ers  San Francisco 49ers",
            "description": "Shanahan spoke about Deebo Samuel and Trent Williams earning firstteam AllPro honors, shared final injury updates before the 49ers Wild Card matchup in Dal...",
            "url": "https://www.youtube.com/watch?v=9N1XpsVgexk",
            "urlToImage": "https://i.ytimg.com/vi/9N1XpsVgexk/hqdefault.jpg",
            "publishedAt": "20220115T01:11:26Z",
            "content": null
        },

        {
            "source": {
                "id": "thehill",
                "name": "The Hill"
            },
            "author": "Lexi Lonas",
            "title": "WHO recommends two new drugs to combat COVID19 infection | TheHill  The Hill",
            "description": "The World Health Organization (WHO) ...",
            "url": "https://thehill.com/policy/healthcare/589869whorecommendstwonewdrugstocombatcovid19infection",
            "urlToImage": "https://thehill.com/sites/default/files/whoheadquartersworldhealthorganization_111620getty.jpg",
            "publishedAt": "20220115T00:49:37Z",
            "content": "The World Health Organization (WHO) recommended two new drugs to combat COVID19 infections.\r\nThe first new drug that is recommended for critical COVID19 cases is baricitinib, an oral drug that supp… [+1218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "RJ Barrett delivers a scouting report on new Knicks teammate Cam Reddish | SNY  SNY",
            "description": "RJ Barrett met the media on Friday and talked about the trade that brought Cam Reddish to the Knicks.  Barrett shared a scouting report on his former Duke te...",
            "url": "https://www.youtube.com/watch?v=PZLp2nPeV6s",
            "urlToImage": "https://i.ytimg.com/vi/PZLp2nPeV6s/hqdefault.jpg",
            "publishedAt": "20220115T00:00:15Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "As Omicron fuels surge, U.S. students stage walkouts to protest inperson classes  Reuters",
            "description": "Hundreds of students in Boston and Chicago walked out of classes on Friday in protests demanding a switch to remote learning as a surge in COVID19 cases fueled by the Omicron variant disrupted efforts at returning to inperson education around the United Sta…",
            "url": "https://www.reuters.com/world/us/omicronfuelssurgeusstudentsstagewalkoutsprotestinpersonclasses20220114/",
            "urlToImage": "https://www.reuters.com/resizer/xcc_pWet3knn1S00PaItBkkMHnI=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/MVJERKHMLZPWFIHDD2YXDKZML4.jpg",
            "publishedAt": "20220114T23:42:00Z",
            "content": "BOSTON/CHICAGO, Jan 14 (Reuters)  Hundreds of students in Boston and Chicago walked out of classes on Friday in protests demanding a switch to remote learning as a surge in COVID19 cases fueled by … [+3880 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "OregonLive"
            },
            "author": "Maxine Bernstein | The Oregonian/OregonLive",
            "title": "Portland police training on protests ends with slide showing mock prayer for ‘dirty hippy,’ prompts investiga  OregonLive",
            "description": "“I am disgusted that this offensive content was added to a training presentation for our police officers,” said Mayor Ted Wheeler, who serves as police commissioner, in a prepared statement Friday.  The slide surfaced during court discovery in a pending feder…",
            "url": "https://www.oregonlive.com/crime/2022/01/portlandpolicetrainingonprotestsendswithslideshowingmockprayerfordirtyhippiepromptsinvestigation.html",
            "urlToImage": "https://www.oregonlive.com/resizer/YZhoGMmc4rskvRG_erBOCmpvm9s=/1280x0/smart/cloudfrontuseast1.images.arcpublishing.com/advancelocal/IS22ZPVQWFGMBMJGQ5BJ2NZRWE.png",
            "publishedAt": "20220114T23:19:00Z",
            "content": "A Portland Police Bureau training presentation on protests ended with a PowerPoint slide listing a prayer for a dirty hippy and the promise to send my humble servants with hats and bats to christen t… [+9422 chars]"
        },
        {
            "source": {
                "id": "thehill",
                "name": "The Hill"
            },
            "author": "Alejandra O'ConnellDomenech",
            "title": "New evidence suggests EpsteinBarr virus triggers Multiple Sclerosis | TheHill  The Hill",
            "description": "The discovery could help pave the way for scientists to develop a way to prevent onset of the disease after being infected with the virus.",
            "url": "https://thehill.com/changingamerica/wellbeing/preventioncures/589848newevidencesuggestsepsteinbarrvirus",
            "urlToImage": "https://thehill.com/sites/default/files/ca_science_istock.jpg",
            "publishedAt": "20220114T23:00:15Z",
            "content": "Researchers have found evidence that suggests the EpsteinBarr virus, which causes a number of illnesses including mononucleosis, might also trigger Multiple Sclerosis (MS). \r\nMultiple Sclerosis is a… [+2687 chars]"
        },





    ]

    capitalizeFristLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("hello i am a construction");
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResult: 0
        }
        document.title = `${this.capitalizeFristLetter(this.props.category)}-Newsuniversity`;
    }
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResult: parsedData.totalResult,
            loading: false,
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }

    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }



    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResult: parsedData.totalResult,
            
        })
    };




    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px' }}>Newsuniversity Top {this.capitalizeFristLetter(this.props.category)} Headline<h1/>
                </h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={<Spinner />}
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
               


            </>
        )
                    }

}
