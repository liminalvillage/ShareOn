import { Telegraf, Markup } from 'telegraf';
import config from "./config.json" assert { type: "json" };

class ShareOn {

       markup (id) { 
        if (id == -1)
        return Markup.inlineKeyboard([
            Markup.button.callback('Do you wanna see some magic?', 'next')
            ])
        else
        return Markup.inlineKeyboard([
        Markup.button.callback('Pick a Question', 'next'),
        Markup.button.url('See Answers', 'http://shareon.earth/?q='+id)
        ])
    }
  
    constructor(bot){
        this.bot = bot
       
        this.bot.start((ctx) => ctx.reply('Welcome to ShareOn!',this.markup(0)))
  
        this.bot.command(['shareon','sharoniscaring','question','start','next'],(ctx) => this.pickQuestion(ctx))      
        bot.action('next', (ctx) =>this.pickQuestion(ctx))
       // bot.start((ctx) => ctx.replyWithGame(gameShortName))
    }

    pickQuestion(ctx){
        //pick a random number
        let number = Math.floor(Math.random()*questions.length)
        let question = questions[number];
        ctx.reply(question, this.markup(number))
    }
}

const questions = [
    "Sharon is Caring SDG's: As a global citizen, what legacy will you leave?",  

    "Imagine humanity sharing the world's abundance. How?", 
    
    "How can the seeds of compassion feed a world hungry for care?", 
    
    "What small acts of kindness promote well-being in communities?", 
    
    " Share a lesson from nature that inspires lifelong learning.", 
    
    "In a world of unity, how do diverse voices empower?", 
    
    "What stories do rivers whisper to inspire shared responsibility?", 
    
    "How can renewable energy connect us with the Earth?", 
    
    "Describe a job where purpose & passion unite.", 
    
    "How can technology dance with nature to create harmony?", 
    
    "What unique strengths can bridge divides & heal communities?", 
    
    "How can urban spaces breathe life into the environment?", 
    
    "How can mindful choices forge bonds with the planet?", 
    
    "SDG 13: In the symphony of nature, how do humans harmonize?", 
    
    "What secrets do coral reefs share about life's interconnectedness?", 
    
    "If you were a tree, what wisdom would you share?", 
    
    "Describe a world where compassion breaks down walls & builds bridges.", 
    
    "How can collective dreams trigger change?", 
    
    "What is the greatest achievement in your life?", 
    
    "Give each other a warm hug.", 
    
    "What do you value most in friendship, & why?", 
    
    "Share a personal challenge, & ask the other(s) how they would tackle it.", 
    
    "In a crisis situation, whom would you call first, & why?", 
    
    "What is your most cherished memory, & why?", 
    
    "Tell the other(s) what you like about them. Be honest! ", 
    
    "What does friendship mean to you?", 
    
    "What are the 3 things that make a relationship work?", 
    
    "What are you most curious to know about each other?", 
    
    "What do you enjoy doing the most with your family members?", 
    
    "Present your favorite 3 yoga positions", 
    
    "Truth or Dare: ask each other anything.", 
    
    "What is the most silly thing that you have ever done with a friend?",
    
    "Invent a new TikTok challegne", 
    
    "Are there people in your life with whom you want to reconnect?", 
    
    "What is freedom in a relationship?", 
    
    "List 3 personal boundaries.", 
    
    "Draft together 3 statements that begin with: We are feeling…", 
    
    "Take 10 deep breaths together.", 
    
    "What is the most important thing in your life?", 
    
    "If you were of a different gender, nationality or religion, what would be the difference?", 
    
    "Find 3 things that you have in common with each other.", 
    
    "What are the 3 things that you think about the most every day?", 
    
    "Look into each other's eyes in silence for 3 minutes. ", 
    
    "What was the last nice thing you did to someone?", 
    
    "What are the challenges that the next generation might face, in your opinion?", 
    
    "What do you feel most grateful for in your life ?", 
    
    "Tell the other(s) what your 1st impression was & whether it changed!", 
    
    "What new thing did you learn today? this week? this year?", 
    
    "Who are the people that truly care for you?", 
    
    "Find 3 differences that you see between each other.", 
    
    "Explain the meaning: “living the moment - with respect!", 
    
    "List 5 of your main values, & rank them in order of importance.", 
    
    "What prejudice would you like to be gone, & why?", 
    
    "What is the importance of rest in your life?", 
    
    "What does it take to have the necessary self-discipline to achieve your goals?", 
    
    "What are you willing to fight for, & why?", 
    
    "If you were the Minister of Happiness, what 3 new laws would you enact?", 
    
    "What would you never compromise on?", 
    
    "If you could change the world, what would you do 1st ?", 
    
    "Have you ever made a decision that changed your whole life?", 
    
    "Make a wish & share it with everyone.", 
    
    "If you had a crystal ball, what would you want to know about the other(s)?", 
    
    "Describe your dream home, provide 10 adjectives.", 
    
    "What makes you forget to eat?", 
    
    "True or False - Share a story!", 
    
    "Describe 3 successes of yours, & identify what they have in common.", 
    
    "Reinvent the 10 commandments with the other(s).", 
    
    "Name 5 people that you particularly admire & what do they represent for you?", 
    
    "How to improve your time management? Find solutions together.", 
    
    "Complete: If I were King/Queen for a day, I would…", 
    
    "Time Machine: In what era would you like to live, and why?", 
    
    "How do you express love towards yourself?", 
    
    "What was your most vivid dream?", 
    
    "Complete the sentence: I wish I had someone to share...", 
    
    "Let’s create a story together, one sentence each.", 
    
    "Choose 3 animals of your liking. What is special about them?", 
    
    "If you could be anyone for a day, who would you be?", 
    
    "Everybody close their eyes & one tells a story beginning with, `Once upon a time`", 
    
    "What would be the title of your TED talk & book, and why?", 
    
    "True or False: one tells two stories, find the lie.", 
    
    "What trait of yours would you like to improve the most, & why?", 
    
    "Truth or Dare: ask anything ", 
    
    "Name a new place that you would like to visit?"
  ];

  export default ShareOn;

const bot = new Telegraf(config.telegram);
bot.launch();
const expenseManager = new ShareOn(bot);