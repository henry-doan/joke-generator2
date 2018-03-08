var quotes = [
	"&#34The Way Get Started Is To Quit Talking And Begin Doing.&#34 -Walt Disney",
	"&#34The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.&#34 -Winston Churchill",
	"&#34Don&#39;t Let Yesterday Take Up Too Much Of Today.&#34 -Will Rogers",
	"&#34You Learn More From Failure Than From Success. Don&#39t Let It Stop You. Failure Builds Character.&#34 - Unknown",
	"&#34It&#39s Not Whether You Get Knocked Down, It&#39s Whether You Get Up.&#34 - Vince Lombardi",
	"&#34If You Are Working On Something That You Really Care About, You Don&#39t Have To Be Pushed. The Vision Pulls You.&#34 - Steve Jobs",
	"&#34People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.&#34 - Rob Siltanen",
	"&#34Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.&#34 - Og Mandino",
	"&#34Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That&#39s The Classic Entrepreneur.&#34 - Mohnish Pabrai",
	"&#34We May Encounter Many Defeats But We Must Not Be Defeated.&#34 - Maya Angelou",
	"&#34Knowing Is Not Enough, We Must Apply. Wishing Is Not Enough, We Must Do.&#34 - Johann Wolfgang Von Goethe",
	"&#34Imagine Your Life Is Perfect In Every Respect, What Would It Look Like?&#34 - Brian Tracy",
	"&#34We Generate Fears While We Sit. We Overcome Them By Action.&#34 - Dr. Henry Link",
	"&#34Whether You Think You Can Or Think You Can&#39t, You&#39re Right.&#34 - Henry Ford",
	"&#34Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.&#34 - Helen Keller",
	"&#34The Man Who Has Confidence In Himself Gains The Confidence Of Others.&#34 - Hasidic Proverb",
	"&#34The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.&#34 - Franklin D. Roosevelt",
	"&#34Creativity Is Intelligence Having Fun.&#34 - Albert Einstein",
	"&#34What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.&#34 - Don Zimmer",
]

function newQuote() {
	var randNum = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randNum];
}