import React from "react"
import NewTweet from "./NewTweet";
import TweetList from "./TweetsList";
import { Arsen_IMG_PATH, Damir_IMG_PATH, Ereke_IMG_PATH, KZ_IMG_PATH, MU_IMG_PATH } from "./images"



class Home extends React.Component {
    constructor(){
        super();

        this.state = {


            tweets: [
                {
                    id: 0,
                    authorName: 'Free KZ news',
                    authorUserName: '@kz_KRG',
                    img: KZ_IMG_PATH,
                    content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    topic: 'news',
                },
                {
                    id: 1,
                    authorName: 'Yerkebulan Omar',
                    authorUserName: '@Super_Memshy',
                    img: Ereke_IMG_PATH,
                    content: 'Режу котов на мемы. На зубы которыми я грызу этот мир',
                    replies: 1200,
                    retweets: 3000,
                    likes: 4800,
                    topic: 'jokes',
                },
                {
                    id: 2,
                    authorName: 'Arsen Bayseupov',
                    authorUserName: '@Monster_no_skill',
                    img: Arsen_IMG_PATH,
                    content: 'How to fix something:- Say "Let`s have a look"; - Describe the brokeness; - Break it a bit more; - Say "nah it`s broken"; -Place hands on hips.',
                    replies: 1100,
                    retweets: 4000,
                    likes: 3500,
                    topic: 'jokes',
                },
                {
                    id: 3,
                    authorName: 'Damir Shayakhmet',
                    authorUserName: '@DamiRRRR',
                    img: Damir_IMG_PATH,
                    content: 'Should #mufc appeal Casemiro`s red card?',
                    replies: 651,
                    retweets: 292,
                    likes: 7433,
                    topic: 'sport',
                },
                {
                    id: 4,
                    authorName: 'Yerkebulan Omar',
                    authorUserName: '@Super_Memshy',
                    img: Ereke_IMG_PATH,
                    content: 'Sixty percent of the human brain is made of fat. Not only does that make it the fattiest organ in the human body, but these fatty acids are crucial for your brain’s performance. Make sure you’re fueling it appropriately with healthy, brain-boosting nutrients.',
                    replies: 100,
                    retweets: 200,
                    likes: 480,
                    topic: 'funfact',
                },
        
            ],
            filteredTweets: [
                {
                    id: 0,
                    authorName: 'Free KZ news',
                    authorUserName: '@kz_KRG',
                    img: KZ_IMG_PATH,
                    content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    topic: 'news',
                },
                {
                    id: 1,
                    authorName: 'Yerkebulan Omar',
                    authorUserName: '@Super_Memshy',
                    img: Ereke_IMG_PATH,
                    content: 'Режу котов на мемы. На зубы которыми я грызу этот мир',
                    replies: 1200,
                    retweets: 3000,
                    likes: 4800,
                    topic: 'jokes',
                },
                {
                    id: 2,
                    authorName: 'Arsen Bayseupov',
                    authorUserName: '@Monster_no_skill',
                    img: Arsen_IMG_PATH,
                    content: 'How to fix something:- Say "Let`s have a look"; - Describe the brokeness; - Break it a bit more; - Say "nah it`s broken"; -Place hands on hips.',
                    replies: 1100,
                    retweets: 4000,
                    likes: 3500,
                    topic: 'jokes',
                },
                {
                    id: 3,
                    authorName: 'Damir Shayakhmet',
                    authorUserName: '@DamiRRRR',
                    img: Damir_IMG_PATH,
                    content: 'Should #mufc appeal Casemiro`s red card?',
                    replies: 651,
                    retweets: 292,
                    likes: 7433,
                    topic: 'sport',
                },
                {
                    id: 4,
                    authorName: 'Yerkebulan Omar',
                    authorUserName: '@Super_Memshy',
                    img: Ereke_IMG_PATH,
                    content: 'Sixty percent of the human brain is made of fat. Not only does that make it the fattiest organ in the human body, but these fatty acids are crucial for your brain’s performance. Make sure you’re fueling it appropriately with healthy, brain-boosting nutrients.',
                    replies: 100,
                    retweets: 200,
                    likes: 480,
                    topic: 'funfact',
                },
                
            ]
            
        }
    }

    onChangeTextInput = (e) => {
        this.setState ({
            content: e.target.value
        })
    }

    addToTweets = () => {
        const newTweet = {
            id: this.state.tweets.lenght -1,
            authorName: 'Nurbol Imankary',
            authorUserName: '@NurRick',
            img: MU_IMG_PATH,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0,
            topic: 'new topic',
        }

        this.setState ({
            tweets: [...this.state.tweets, newTweet],
            content: ''
        })
    }

    deleteTweet = (id) => {
        
        this.setState ({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
    }

    filterTweetsByTopic = (topic) => {
        console.log('filter', topic)
        this.setState ({
            filteredTweets: this.state.tweets.filter(item=>item.topic === topic)
        })
    }

    render() {
        const { tweets, content, filteredTweets } = this.state;
        
        return (
        <div className="w-50 mt-3">
            <h5 className="mx-3">Home</h5>
            <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets}/>
            <div>
                <button onClick={()=>this.filterTweetsByTopic('news')}>News</button>
                <button onClick={()=>this.filterTweetsByTopic('jokes')}>Jokes</button>
                <button onClick={()=>this.filterTweetsByTopic('sport')}>Sport</button>
                <button onClick={()=>this.filterTweetsByTopic('funfact')}>Fun Facts</button>
                <button onClick={()=>this.filterTweetsByTopic('new topic')}>New topic</button>
            </div>
            <TweetList tweets={filteredTweets} deleteTweet={this.deleteTweet}/>
        </div>
        )    
    }
}

export default Home;
