/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.userTable = {}
  this.tweetTable = []
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  if (this.userTable[userId] === undefined) {
    this.userTable[userId] = {}
  }
  this.tweetTable.push({
    userId,
    tweetId
  })
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const res = []
  // console.warn('this.userTable', this.userTable)
  // console.warn('this.tweetTable', this.tweetTable)
  const followed = this.userTable[userId]
  for (let i = this.tweetTable.length - 1; res.length <= 9 && i >= 0; --i) {
    const tweet = this.tweetTable[i]
    // console.warn('tweet', tweet)
    const tweetUserId = tweet.userId
    // console.warn('tweetUserId', tweetUserId)
    if (tweetUserId === userId || (followed && followed[tweetUserId] !== undefined)) {
      res.push(tweet.tweetId)
    }
  }
  // console.warn('res', res)
  return res
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (this.userTable[followerId] === undefined) {
    this.userTable[followerId] = {}
    this.userTable[followerId][followeeId] = followeeId
  } else {
    this.userTable[followerId][followeeId] = followeeId
  }

};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.userTable[followerId] !== undefined && this.userTable[followerId][followeeId] !== undefined) {
    delete this.userTable[followerId][followeeId]
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

const twitter = new Twitter();

// // 用户1发送了一条新推文 (用户id = 1, 推文id = 5).
// twitter.postTweet(1, 5);

// // 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
// twitter.getNewsFeed(1);

// // 用户1关注了用户2.
// twitter.follow(1, 2);

// // 用户2发送了一个新推文 (推文id = 6).
// twitter.postTweet(2, 6);

// // 用户1的获取推文应当返回一个列表，其中包含两个推文，id分别为 -> [6, 5].
// // 推文id6应当在推文id5之前，因为它是在5之后发送的.
// twitter.getNewsFeed(1);

// // 用户1取消关注了用户2.
// twitter.unfollow(1, 2);

// // 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
// // 因为用户1已经不再关注用户2.
// twitter.getNewsFeed(1);


twitter.postTweet(1, 1)
twitter.getNewsFeed(1)
twitter.follow(2, 1)
twitter.getNewsFeed(2)
twitter.unfollow(2, 1)
twitter.getNewsFeed(2)