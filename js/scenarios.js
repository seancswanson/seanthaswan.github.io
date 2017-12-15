// objects for job position: job title > situations > choices > starting score?

// var for mailroom clerk position object
var jobPositions = [
{
//**job title
		title: "Mailroom Clerk",
		scenarios: [
			{
	  	//scenario text
	  text: "The building you are in looks brand-spanking-new on the outside yet you discover that the mail room equipment outdates you by decades... something is wrong with the printer again and it appears to spit out a giberish error >> 'fatalError #616: unexpected Token' << . What do you do? ",
	  //what happens next?
	  outcomes: [
		  {
		  //action, result text, score counters
		  action: ">Search online to debug and hope their is a 'Corporate Overflow' answer, then follow the best voted answer.",
		  result: "Your stack skills are impressive! You find out you need to power cycle the printer. Nice work!",
		  confidence: 50,
		  brownie: 0
		  },
		  {
	      action: ">Submit a ticket to maintenance hoping they fix it.",
	      result: "Maintenance never responds and you can't turn in your daily mail summary. And your manager chews you out. Bummer.",
	      confidence: -30,
	      brownie: -1
		  },
		  {
	      action: ">When noone is looking you smack the side of the printer and will take full credit for the 'repair' (if it works).",
	      result: "The printer never errors again and your manager praises you for your ingenuity! They think you might have some worth after all.",
	      confidence: 100,
		      brownie: 1
		  },
		  {
	      action: ">Open up the maintenance door of the damned thing and investigate.",
	      result: "You find a banana peel in the rollers and remove it... but then slice your finger on the metal components whodunit??",
	      confidence: -30,
	      brownie: 0
		  }
		  ]
		},
		{
	  //scenario text
	  text: "While in a hurry to filter the corporations 'junk' mail, you accidently drop your stack of envelopes and see that one of them is addressed to the Chairman with confidential label and text that reads 'Sensitive stakeholder info'... you remember you have stock in the company and that this information could affect you. What do you do?",
	  outcomes: [
		  {
				action: ">This seems urgent! You head upstairs and personally deliver the letter to the Chairman.",
				result: "You are stopped by the Chairman's secretary. She takes a look at the letter and appreciates the gesture but wonders why you didn't send it through the tube. Nice try.",
				confidence: -30,
				brownie: 0
			},
			{
				action: ">No one will notice it's missing, things get lost in the mailroom. You open it and read the information for yourself.",
				result: "JACKPOT!!! DING DING DING! The company is working on a revolutionary product and the value is about to skyrocket in a week. Time to sell! The Chairman apparently recieved a personal email with the same information.",
				confidence: 100,
				brownie: 0
			},
			{
				action: ">No one will notice it's missing, things get lost in the mailroom. You open it and read the information for yourself.",
				result: "Super sad day... it appears the company is about to take a huge financial nosedive after the President publically made a racist comment about the Shawarma truck owner outside of the tower... goodbye retirement! The manager sees you crying and finds out you snooped.",
				confidence: -50,
				brownie: -1
			},
			{
				action: ">This looks different than other letters you have seen so you pass it along to the mail room manager.",
				result: "It seems you just passed along a very important baton and the manager get's recognized for acting so quickly on 'their' discovery. But not without graciously thanking you.",
				confidence: 75,
				brownie: 1
			}
			]
		}, 
		{
	  text: "Your coworkers on the mail floor are up in arms! They're talking about going on strike due to their wage being at an abhorrent low at $14/hr and they don't know that your last paycheck states that you earn $18/hr... Perhaps you slipped through the cracks when hired and the error hasn't been noticed. What do you do?",
	  outcomes: [
		  {
				action: ">Since your time as a clerk you have managed to form a strong bond with your mailroom ilk but can't afford to miss work. You privately let your manager know that your pay has been erroneously raised this whole time.",
				result: "Your manager appreciates your honesty, changes your pay, and encourages you to strike anyway because they agree (privately) that you all deserve a higher wage... Think of the children!",
				confidence: 10,
				brownie: 0
			},
			{
				action: ">You are all practically family and decide to strike with them but play dumb to the fact that you get paid more. I hope they don't find out!",
				result: "A week without pay goes by and the big wigs ignore your pleas for higher wages. After threatening you all with termination the mailroom resumes work and your higher pay goes unnoticed.",
				confidence: 30,
				brownie: 0
			},
			{
				action: ">You tell them about the error in your pay to illustrate the hypocrisy and ignorance of the corporate industrial complex.",
				result: "Your colleagues and your manager all respect your genuine concern for equality and elect you to be head of negotiations for the union. You are able to squeeze an extra few dollars for everyone on your team... including your manager!",
				confidence: 75,
				brownie: 1
			},
			{
				action: ">You avoid the conversation alogether with the hope that this blows over and you can continue working.",
				result: "You appear to be the only one not upset at the collective disenfranchised and exploited state of the mailroom workers... Your manager seems suspicious of this and calls you out after realizing why you aren't striking. Honesty would have prevailed!",
				confidence: -70,
				brownie: -1
			}
			]
		},
		{
	  text: "You are the youngest and most tech savvy that works in the mailroom and is always looking to maximize efficacy in all tasks. It's quite frustrating working so hard and not feeling like you made an impact in the company. You have found time to fix one thing before you sense a promotion in your future. What is the priority?",
	  outcomes: [
	  {
	        action: ">You think the manual punchcard and scheduling system needs an overhaul and opt for developing a mobile app to take care of those issues.",
	        result: "Wow, the app looks and works great for handling scheduling! Unfortunately your app doesn't get adopted because the average age of the mailroom workers is 70 and no one has smartphones... Your manager offers to refer your product to a friend who's business could use that app!",
	        confidence: 30,
	        brownie: 0
	    },
	    {
	        action: ">You are unsure why the shift hours are from 10-6 when the bulk of the mail gets delivered at 8:30am and ceases by 2pm. One spreadsheet later and you have found out that if shifts began at 8:30am and ended at 4pm then team productivity would increase by 100%.",
	        result: "Your mailroom colleagues sign a petition to put this new schedule into place. It allows the older crowd to be home sooner with their families, the younger folks to have more time to party and such, and the manager has less micromanaging to deal out!",
	        confidence: 75,
	        brownie: 1
	    },
	    {
	        action: ">If you are due for a promotion then why should you bother putting in any work fixing this draconic place?",
	        result: "You do nothing and ride out the last week in utter mediocrity and frustration at old technology.",
	        confidence: -1,
	        brownie: 0
	    },
	    {
	        action: ">You think the company should go paperless and send an 'official' letter to all regular senders asking them to send emails to the manager for quiker distribution.",
	        result: "Without discovering why, the Manager has been recieving hundreds of important emails a day and is having the WORST time sorting them from the junk mail. They notice that they reference a letter stating why they are emailing now and send a scanned copy of that letter you penned... they recognize your handwriting. This will be hard to reverse!!11!",
	        confidence: -50,
	        brownie: -1
	    }
			]
		}
		]},
{
	title: "Office Intern",
	scenarios: [
		{
	  text: "The Chairman is in a real bind... They are busy, they are stressed, AND their wife's birthday is tomorrow and he's asked you what you think she would like. What will you suggest?",
	  outcomes: [{
	          action: ">Flowers. All women love flowers (AND THEY'RE CHEAP).",
	          result: "All women except for the Chairman's wife. The Chairman says his wife deserves better than mere plants! You would only understand if you made $500k /yr...",
	          confidence: -30,
	          brownie: -1
	      },
	      {
	          action: ">'Nothing... I don't even want to get involved.'",
	          result: "The Chairman applauds your honesty and gives you some relationship advice... 'When you have the opportunity to gift something to your S.O. always go with what your heart tells you. Be present with them and show your love not with presents but with time.'",
	          confidence: 100,
	          brownie: 1
	      },
	      {
	          action: ">A diamond necklace. (CLICHE BUT EFFECTIVE !)",
	          result: "Not a terrible idea... considering she wears all 5 at a time I might want to consider a different jewel. You are giving me some great ideas! Thank you intern!",
	          confidence: 30,
	          brownie: 0
	      },
	      {
	          action: ">A life time membership at 'binge shopper's anonymous'.",
	          result: "He thinks you are being ironic and has a knee-slappin' laughing attack... 'If only she saw it as a problem- I might still have some retirement money! I'm trying to spend some time in Cabo, baby! WAHOO!' He walks away chuckling to himself... cementing the idea in your head that the Chairman is being used. :(",
	          confidence: 50,
	          brownie: 0
	      }
	      ]
	      },
	      {
		text: "The 'premier' (aka FRAT BOYS) sales team thinks that as an intern, your real job is to be at their beck and call for anything they desire. Last week they required 3 coffee runs... EACH DAY. Now they request you fetch them all their groceries for the evening because they have to stay late. How do you respond?",
	  outcomes: [{
	          action: ">You flip them the bird and continue stapling papers.",
	          result: "They get PISSED and try to force their toxic masculinity on you but frankly they know they can't force you to do anything. They say they will 'put in a bad word' about you... but the mentor overseeing your internship privately respects your bird flipping.",
	          confidence: -20,
	          brownie: 1
	      },
	      {
	          action: ">Meh, you realize that this doesn't happen often and decide to comply for the sake of ease.",
	          result: "You've had an epiphany... get paid (albeit negligbly) to walk around the city for a few hours and catch up on podcasts?? This job ain't so bad! Maybe they won't wreck my career afterall.",
	          confidence: 75,
	          brownie: 0
	      },
	      {
	          action: ">You do their bidding but not without throwing some extra food in their for yourself...",
	          result: "... and a bottle of whisky. Score! They are so thankful for you. You saved their unhappy marriages and saw that you bought a few extra things for yourself but are TOTALLY cool with that. You are our favorite intern!! They forget your name the next day.",
	          confidence: 30,
	          brownie: 0
	      },
	      {
	          action: ">No big deal! There is a grocery store down the street, it won't take long.",
	          result: "The grocery store they want you to go to, 'Whole Paycheck', is on the other side of the city and have to take 2 busses and a train to get there and back... The sales lead reprimands you for returning late.",
	          confidence: -0,
	          brownie: -1
	      }
	      ]
	     },
	     {
	  text: "You were the first and only intern in the sales office until you see a memo that was distributed amongst the sales team. The memo alerted that there will be a group of college undergrads taken on as interns with hopes of getting hired once graduated. Up until this point there has been no competition... how do you react?",
	  outcomes: [{
	          action: ">Nothing can phase you, you keep your head down and work as hard as you always do... right?",
	          result: "These interns are a joke... within a week they are already complaining about the hiearchical nature of the company and are frustrated they are doing menial tasks. They seem to leave early everyday with no penalty... You sense some just dessert coming their way. Keep it up!",
	          confidence: 75,
	          brownie: 0
	      },
	      {
	          action: ">You pick 'em off one by one to divulge some frightening information about the company's 'poor' (wink wink) financial status.",
	          result: "The interns run scared not out the front door... but right to the sales lead hoping to jump ship scot-free. They seem to all point to you as the source of the false information. The sales lead sees right through your charade and is upset about your guerilla tactics so early in your career.",
	          confidence: -100,
	          brownie: -1
	      },
	      {
	          action: ">You befriend the intern that looks familiar to you. Maybe you can rise to the top together!",
	          result: "A small world indeed! That intern happened to be your middle-school crush all blossomed! The two of you rekindle the flame of romance and under the nose of your manager, to boot. The manager loves the jump in productivity.",
	          confidence: 100,
	          brownie: 1
	      },
	      {
	          action: ">The Chairman is coming to visit... But an intern is napping. You wake them up just in time.",
	          result: "The intern is eternally grateful and buys you lunch for the entire next week! Oh boy would the Chairman lose their cool if they saw them napping. Pastrami sandwhiches from the deli next door never tasted so good. ",
	          confidence: 5,
	          brownie: 0
	      }
	      ]
	     },
	     {
	     text: "The 40th annual intern games is coming up and you are expected to be there. There will an opportunity to play puffy-suit sumo with your competitor company's interns. The winner gets to use the executive toilet for a month!",
	  outcomes: [{
	          action: ">You call out sick and would rather use the day to catch up on video games. They said attendance was optional!",
	          result: "Your manager had motivational signs made, a cake prepared, and was decked out in football dad like apparel hoping you would be star of the show. They show up and discover you called out sick. They call you to check on your health and hear a 'BOOM HEADSHOT' in the background... your roommate got too excited on 'Carl of Duty' and blew your cover.",
	          confidence: -100,
	          brownie: -1
	      },
	      {
	          action: ">You train for the competition and bring your 'A' game. This is your time to shine!",
	          result: "Why did you go to the diner for corned beef hash BEFORE the match?? Your stomach hurts like crazy but you end up smashing your competition and win but due to your indigestion you were in the bathroom when you got recognized. Your manager wanted to share that moment with you.",
	          confidence: 75,
	          brownie: 0
	      },
	      {
	          action: ">You showed up for emotional support of the other interns... you didn't volunteer to play but your team should appreciate you being there!",
	          result: "Although they appreciate your enthusiastic cheering, they didn't have enough collective points to beat FreshCooks Inc,. Better luck next year!",
	          confidence: -30,
	          brownie: 0
	      },
	      {
	          action: ">You train for the competition and bring your 'A' game. This is your time to shine!",
	          result: "They've never seen't a wrassler like yourself at the games in years. It's as if you had been training sumo for your whole life! Turns out you had been! Your study abroad in Japan bore great fruits. You and your manager share a moment with the trophy on stage.",
	          confidence: 100,
	          brownie: 1
	      }
	      ]
	     }
	   ]},
	     {
//**job title
		title: "Sales Manager",
		scenarios: [
			{
	  	//scenario text
	  text: "The Accounting Department wants to see you about the milage on your company car. I mean really, 5000 miles in April alone?? You better have something up your sleeve... what do you say?",
	  //what happens next?
	  outcomes: [
		  {
		  //action, result text, score counters
		  action: ">'I have a long commute, I come all the way from Spokane! This job means a lot to me.'",
		  result: "Seems they never updated your information from when you lived in Kirkland... I guess you are off the hook. Not sure if they think you are crazy for driving that far for a job or if they admire your dedication. Either way, they'll never know about your surprise road trips to Couer d'Alene! Suckers!",
		  confidence: 75,
		  brownie: 0
		  },
		  {
	      action: ">'I took a wrong turn at the second light.'",
	      result: "You struck a chord with the auditor, 'I HATE THAT SECOND LIGHT! The one that spits you out into the maze of one-ways?' Yeah... that one. Probably the last time you'll  be able to use that excuse to shadow your bi-monthly trips to Malibu. Shame... you looked great with a tan.",
	      confidence: 10,
	      brownie: 0
		  },
		  {
	      action: ">'The Chairman wanted Cuban cigars!'",
	      result: "'As much as we hate to see such extravagant usage of our company Hummer's...', the auditor paused, 'What the Chairman wants, they get. No questions asked. Thanks for being the one to make that drive.'",
	      confidence: 100,
		      brownie: 1
		  },
		  {
	      action: ">'Well, it's 3000 miles less than last month!",
	      result: "Wait really? We had lost the data from May due to a security breach and had wondered how those thousand-some dollars in gas station bills were never reconciled.' We are taking that out of your paycheck!",
	      confidence: -70,
	      brownie: -1
		  }
		  ]
		},
		{
	  //scenario text
	  text: "Your significant other just called for you at work. You're not there... neither is your secretary! When you get home what will you tell them? This doesn't seem like you...",
	  outcomes: [
		  {
				action: ">'It was noon when you called and everyone was at lunch.'",
				result: "It's true, you don't even eat lunch with your secretary! You go out with your sales associates to the local po boy shop and slam some sammies! No harm done :)",
				confidence: 50,
				brownie: 0
			},
			{
				action: ">'Ok, ok... so I'm in love with my secretary. So what?!?",
				result: "Not chill. This WAS supposed to be an open relationship with OPEN communication. You have earned a nice spot at night on the couch with your pupper... before they order the pupper into the bedroom and lock the door. Better start thinking of a place to stay. You are more stressed than ever and sales as a whole are down and you take the brunt of it.",
				confidence: -100,
				brownie: -1
			},
			{
				action: ">'We were at a jewelry store looking for a diamond for you!'",
				result: "She had a feeling you were planning something special! Their birthday is right around corner after all, and it was noticed that you had been a little sneaky recently. They pretend they never heard that and act totally surprised when you gift that gorgeous earring set.",
				confidence: 75,
				brownie: 0
			},
			{
				action: ">Say nothing. My spouse loves a little mystery in a marriage. ",
				result: "You come home after a long day at work and notice the lights are off. There are candles lit, rose petals littered the ground leading to the bedroom, and the smell of hot scented oil emenating around you. This was the kind of stress relief you needed this season! Your sales associates wonder why you are in such a good mood and soak up the positivity. Sales are up!",
				confidence: 100,
				brownie: 1
			}
			]
		}, 
		{
	  text: "Rumor has it there's an embezzlement scheme going down. One of your co-workers on the other team told the Chairman that you are involved. A meeting has been called and YOU are the guest of honor. What will you tell them at the meeting?",
	  outcomes: [
		  {
				action: ">'Nothing. There's always the Fifth Amendment, you know.",
				result: "You avoid eye contact with everyone in the room, you pit out, and you may have tinkled a little bit. You didn't do nothin'! After you pleaded the 5th, your coworker lays down emails he 'scraped' (forged) together.. some pretty convicting evidence. You were 'caught' red handed as it seems. Everyone believes your coworker. You keep your job but must work on the Holiday Party commission until you quit.",
				confidence: -100,
				brownie: -1
			},
			{
				action: ">'Everything - about as much as a grape knows about it.'",
				result: "They were expecting a whole litmus case on your part to defend yourself but there was nothing to say. You were dismissed as a potential subject in the investigation.... The board isn't at all closer to learning the truth. Maybe something will come of it later.",
				confidence: 30,
				brownie: 0
			},
			{
				action: ">'I've been framed and my feelings are hurt... alot. Not fair!",
				result: "They were expecting a whole litmus case on your part to defend yourself but you broke down and cried due to the pressure. You were dismissed as a potential subject in the investigation.... not without losing the respect of your colleagues. Your sales associates look at you a little differently now.",
				confidence: -30,
				brownie: 0
			},
			{
				action: ">'I'll confess. Maybe they'll respect my honesty. It hasn't hurt me in the past.",
				result: "Due to the amazing track record you have about being honest and straight forward, the big wigs in the meeting don't believe you and they continue their investigation. (Your coworker seems visibly nervous... I wonder why??)",
				confidence: 70,
				brownie: 1
			}
			]
		},
		{
	  text: "You narrowly escaped the embezzlement charge by your co-worker, and now you have been accused of harassing him in retaliation. A special hearing has been convened to hear your side. This is getting old- What will you tell the hearing board this time???",
	  outcomes: [
	  {
	        action: ">Nothing.... back to the old Fifth Amendment!",
	        result: "The big wigs who have seen your good work o'er the years since your lowly Mailroom Clerk days don't push the issue. The crowd erupts in the board room and they start throwing tomatoes at your coworker... wait what??? Sure feels good to have your bosses on your side!",
	        confidence: 100,
	        brownie: 0
	    },
	    {
	        action: ">Not true! You'd kill before you'd harass anyone!",
	        result: "The big wigs who have seen your good work o'er the years since your lowly Mailroom Clerk days believe you over the other a-hole. The crowd erupts in the board room and they start throwing tomatoes at your coworker... wait what??? Sure feels good to have your bosses on your side!",
	        confidence: 75,
	        brownie: 1
	    },
	    {
	        action: ">'Not true! The death threats were to his children!'",
	        result: "It's as if the whole world forgot that you were once wrongly the target of the embezzlement scheme and now are upset that you stooped so low. Seriously... why bring the children into this? The big wigs note your immaturity and dock your pay for the next month.",
	        confidence: -100,
	        brownie: 0
	    },
	    {
	        action: ">'OK, OK. But he's mean and made me cry'",
	        result: "Although you aren't guilty of these absurd charges, you let it out that you are a sensitive human and everyone respects your honesty and admires your ability to be vulnerable under pressure. Your coworker who brought these charges onto you loses his cool and slurs your family (crickets in the boardroom start chirping). How's that for hypocrisy?",
	        confidence: 100,
	        brownie: 0
	    }
			]
		}] 
		},
		{
//**job title
		title: "President of Sales",
		scenarios: [
			{
	  	//scenario text
	  text: "In the first week of your new prestigious job overseeing the whole of the sales operations, things are collapsing. Amidst a state-wide cyber attack and EMP explosion over the city, most data seems to have been destroyed! What do you do?",
	  //what happens next?
	  outcomes: [
		  {
		  //action, result text, score counters
		  action: ">Browse the server room storage closet for external hard drives that were disconnected at the time of the attack.",
		  result: "You see a box that's labeled 'BACKUPS AS OF MAY' up on the top shelf. As you pull it out your footing slips and you drop the box. It smashes into a thousand pieces. Turns out they were 10 years old and stored on floppy disks. You will have to report this to your CTO as soon as possible. Nothing else you can do and it's not your job! (shrug)",
		  confidence: 50,
		  brownie: 0
		  },
		  {
	      action: ">Attempt to restore the servers' computers to a previous save state.",
	      result: "It appears the main database servers were spared from the magnetic scrambling of the EMP and you were able to restore back to the beginning of the year. Using that data, the developers can extrapolate sales data to re-forecast fiscal goals and get the company back on track.",
	      confidence: 50,
	      brownie: 0
		  },
		  {
	      action: ">Reach out to the old CTO for advice.",
	      result: "The old CTO never worked with digital storage and can't help you. Man... being president is tough! You didn't sign up for this and can't wait to get back to sole sales overseer duties!",
	      confidence: -10,
		      brownie: 0
		  },
		  {
	      action: ">Call the current CTO in Bali and get him home, STAT!",
	      result: "Bless up! You made the right call... while deep in meditation the CTO had his spidey senses tingling and was preparing to break his silence to fly home from Bali and deal with the situation. The executives typically have an unspoken rule not to call each other while on vacation but times are changing and this catastrophe needs to be handled as to not surprise the company in the future.",
	      confidence: 100,
	      brownie: 1
		  }
		  ]
		},
		{
	  //scenario text
	  text: "Boy... one thing after another! That embezzling coworker told the Chairman that he found a bottle of whiskey in your desk drawer. Back to the old hearing board! What will you say this time?",
	  outcomes: [
		  {
				action: ">Hey, what's he doing in 'my' office? Isn't that trespassing?",
				result: "Great point! Your coworker had always been jealous that you got the open President of Sales job and has been trying to sabotage you since! The board relinquishes him from duty and suspends his pay, AND his retirement fund is transfered immediately to your children's college fund.",
				confidence: 100,
				brownie: 1
			},
			{
				action: ">For medicinal purposes only ('HIC...HiCup')",
				result: "The board is concerned about your mental health and signs you up for counseling. Keep this behavior up and you may lose the confidence of the folks 'upstairs' when it comes time to try out for the soon-to-be-open Chairman of the Board position.",
				confidence: -100,
				brownie: -1
			},
			{
				action: ">It was a present for the Chairman! Yeah... that's it!",
				result: "The Chairman hears about your present and politely declines the offer. Apparently their palate is too 'refined' to drink that garbage. Good grief that was close! More for me!",
				confidence: 50,
				brownie: 0
			},
			{
				action: ">Oh boy do I need a drink!",
				result: "You are the President of Sales which is a branch of the company known for it's lax culture of drinking on the job. Turns out people are better at salesmanship whilst slightly buzzed! It's not like you were getting sloshed everyday!",
				confidence: 75,
				brownie: 0
			}
			]
		}, 
		{
	  text: "You are invited to give a talk at the local University's DECA club meetup. You are welcomed warmly by these bright young students and they are eager to hear you speak. They are all poised with their tablets and microphones waiting to hear what kind of wisdom you can offer. What do you speak about?",
	  outcomes: [
		  {
				action: ">Comraderie. You're my fam, bro! You're my bro, fam!",
				result: "All of those years running around doing errands as an office intern paid off! The podcasts you use to listen to helped shape how you view mentorship and the value of helping those around you. The sage in you drops some amazing motivational quotes about how success is a group journey!",
				confidence: 50,
				brownie: 0
			},
			{
				action: ">Alcoholism. The somber reality of corporate life!",
				result: "You speak from the heart about a topic that plagues your industry. Something that you have first hand experience with dealing with young, headstrong sales associates. Unfortunately the message is lost due to this meeting being the day after rush week... everyone is recovering from the worst hangover and was hoping to be uplifted and not depressed about their choces. Nice try!",
				confidence: -20,
				brownie: -1
			},
			{
				action: ">Personal Brand. 'You vs. The World!'",
				result: "You speak about personal branding with conviction and vigor! But in reality it's a buzz-phrase that you have no idea about but read on the internet. You see them all writing intently and a sparkle in their eye shows that you have inspired many a young entrepreneur today!",
				confidence: 75,
				brownie: 1
			},
			{
				action: ">'Started at the bottom now I'm here!",
				result: "You spit some knowledge about 'hustle' and 'grinding' with conviction and vigor! But in reality it's a a lyric from a song you don't know but read on the internet. At least you can relate to it! You see them all writing intently and a sparkle in their eye shows that you have inspired many a young entrepreneur today!",
				confidence: 100,
				brownie: 0
			}
			]
		},
		{
	  text: "The Chairman of the Board pulls you into a one-on-one meeting to discuss terms of their resignation. The time has come to choose a new successor and wants to evangalize about his wishes for how the company should be directed. You are not quite sure if you are the only personthey is talking to about this. What is your demeanor?",
	  outcomes: [
	  {
	        action: ">Totally nervous. I've waiting so long for this meeting!",
	        result: "They discuss plans for the company. The corporation is expanding into new markets on Mars! 'You remind me a lot of myself.. putting up with the coroproate B.S. because you knew how rewarding it would be at the end. It's a hard road ahead, but I think you are the perfect candidate. I implore you to interview for my job when I leave.",
	        confidence: 50,
	        brownie: 0
	    },
	    {
	        action: ">Happy, calm, collected. This was a long time coming.",
	        result: "They discuss plans for the company. The corporation is expanding into new markets on Mars! 'You remind me a lot of myself.. putting up with the coroproate B.S. because you knew how rewarding it would be at the end. It's a hard road ahead, but I think you are the perfect candidate. I implore you to interview for my job when I leave.",
	        confidence: 50,
	        brownie: 1
	    },
	    {
	        action: ">A little scared... is this really about the embezzlement scheme?",
	        result: "They discuss plans for the company. The corporation is expanding into new markets on Mars! 'You remind me a lot of myself.. putting up with the coroproate B.S. because you knew how rewarding it would be at the end. It's a hard road ahead, but I think you are the perfect candidate. I implore you to interview for my job when I leave.",
	        confidence: 50,
	        brownie: 0
	    },
	    {
	        action: ">Stoic. Unmoved. And slightly hungry.",
	        result: "They discuss plans for the company. The corporation is expanding into new markets on Mars! 'You remind me a lot of myself.. putting up with the coroproate B.S. because you knew how rewarding it would be at the end. It's a hard road ahead, but I think you are the perfect candidate. I implore you to interview for my job when I leave.",
	        confidence: 50,
	        brownie: 0
	    }
			]
}
		]},
];