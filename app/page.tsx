"use client"

import { useState, useEffect } from "react"
import PrayerSection from "./components/PrayerSection"
import ProgressTracker from "./components/ProgressTracker"
import ReflectionInput from "./components/ReflectionInput"
import PrayerTimer from "./components/PrayerTimer"
import RandomVerse from "./components/RandomVerse"
import DailyChallenge from "./components/DailyChallenge"
import StreakTracker from "./components/StreakTracker"
import SettingsButton from "./components/SettingsButton"

const prayerSections = [
  {
    title: "Day 1: Gratitude",
    content:
      "Heavenly Father, I come before You with a heart overflowing with gratitude. Thank You for the precious gift of life, for Your unfailing love that sustains me each day, and for the countless blessings You've bestowed upon me. Help me to cultivate a spirit of thankfulness in all circumstances, recognizing Your goodness even in challenging times. May my life be a testament to Your grace and may my gratitude draw others to You. Open my eyes to see the beauty in both the extraordinary and the ordinary moments of life. Thank You for Your provision, protection, and presence. I'm grateful for the breath in my lungs, the roof over my head, and the food on my table. Thank You for the relationships You've blessed me with and for the opportunities to grow and serve. Help me to never take Your blessings for granted and to always have a heart of appreciation. In Jesus' name, Amen.",
  },
  {
    title: "Day 2: Wisdom",
    content:
      "Lord of all wisdom, I come before You today seeking Your divine guidance and understanding. Your Word promises that if anyone lacks wisdom, they should ask You, who gives generously to all without finding fault. I humbly ask for Your wisdom to permeate every aspect of my life. Grant me discernment in my decisions, both big and small. Illuminate my mind with Your truth and help me to see situations from Your perspective. Give me clarity in my thoughts, especially when faced with confusion or uncertainty. Help me to understand Your will and to align my choices with Your perfect plan. In my relationships, grant me the wisdom to speak words that build up and encourage, to listen with empathy, and to act with kindness and grace. May Your wisdom guide me in my work, my studies, and in every area where I need Your insight. Help me to be quick to listen, slow to speak, and slow to become angry, as Your Word instructs. Let Your wisdom be evident in my life, drawing others to You and bringing glory to Your name. In Jesus' name, Amen.",
  },
  {
    title: "Day 3: Strength",
    content:
      "Almighty God, I come to You today acknowledging my weakness and my need for Your strength. Your Word tells us that when we are weak, then we are strong, for Your power is made perfect in our weakness. I draw upon Your infinite strength today, recognizing that You are the source of all power and might. Help me to rely on Your strength, not my own limited abilities. In moments of physical exhaustion, emotional drain, or spiritual fatigue, remind me that I can do all things through Christ who strengthens me. Give me the strength to face the challenges that lie ahead, to persevere in faith when circumstances seem overwhelming, and to stand firm in Your truth when faced with opposition. Strengthen me to resist temptation, to choose what is right even when it's difficult, and to live a life that honors You. May Your power work through me, accomplishing more than I could ever ask or imagine. Let Your strength be made evident in my weaknesses, so that others may see Your power at work in my life. In moments of doubt or fear, help me to remember that greater is He who is in me than he who is in the world. Thank You for being my rock, my fortress, and my deliverer. In Jesus' mighty name, Amen.",
  },
  {
    title: "Day 4: Love",
    content:
      "Loving Father, I come before You today, asking that You fill my heart to overflowing with Your perfect love. Your Word tells us that You are love, and that whoever lives in love lives in You, and You in them. Help me to comprehend the width, length, height, and depth of Your love for me, a love so vast that it surpasses knowledge. As I bask in the warmth of Your love, help me to extend that same love to others. Teach me to love as You have loved me - unconditionally, sacrificially, and without reservation. May Your love flow through me, bringing healing to the broken, forgiveness to the guilty, and compassion to those in need. Let Your love be the driving force behind my words, actions, and thoughts. Use me as a channel of Your love in this world that so desperately needs it. Help me to love not just in word or speech, but in action and in truth. Give me the strength to love even those who are difficult to love, remembering that You loved us while we were still sinners. May my life be a reflection of Your love, drawing others to You and bringing glory to Your name. Thank You for Your unfailing love that never ceases and Your mercies that are new every morning. In Jesus' name, Amen.",
  },
  {
    title: "Day 5: Peace",
    content:
      "Prince of Peace, I come to You today seeking Your perfect peace that surpasses all understanding. In the midst of life's storms and uncertainties, I ask that You calm my anxious thoughts and still my restless heart. Your Word promises that You will keep in perfect peace those whose minds are steadfast because they trust in You. Help me to fix my thoughts on You, the author and perfecter of my faith. When chaos surrounds me, be my calm center. When worries threaten to overwhelm me, remind me of Your sovereign control over all things. Let Your peace guard my heart and mind in Christ Jesus, anchoring me in Your presence regardless of my circumstances. Help me to cast all my anxieties on You, knowing that You care for me. Teach me to rest in Your love and to find comfort in Your promises. As I receive Your peace, help me to be a peacemaker, spreading Your tranquility to those around me. May Your peace reign in my life as a testimony to Your goodness and faithfulness. Let it be a witness to others of the hope I have in You. Thank You for being my peace in every storm, my refuge in times of trouble, and my ever-present help. In the name of Jesus, the Prince of Peace, Amen.",
  },
  {
    title: "Day 6: Faith",
    content:
      "Lord, I come before You today asking for an increase in my faith. Your Word says that faith is the assurance of things hoped for, the conviction of things not seen. Help me to trust in You completely, even when I cannot see the way forward. Strengthen my belief in Your promises and Your character. When doubts creep in, remind me of Your faithfulness throughout history and in my own life. Help me to walk by faith and not by sight, trusting in Your perfect plan even when I don't understand. May my faith be a testimony to Your faithfulness, inspiring others to put their trust in You. Give me the courage to step out in faith when You call, knowing that You are with me always. Increase my faith to believe for the impossible, remembering that with You, all things are possible. Help me to anchor my faith in the solid rock of Your Word, so that when the storms of life come, I will stand firm. Thank You for the gift of faith and for being faithful even when I am faithless. In Jesus' name, Amen.",
  },
  {
    title: "Day 7: Forgiveness",
    content:
      "Merciful God, I come before You today, grateful for Your forgiveness and asking for the strength to forgive others as You have forgiven me. Your Word tells us to forgive one another, just as in Christ You forgave us. Help me to release any bitterness, resentment, or anger I'm holding onto. Give me the grace to extend forgiveness, even when it's difficult. Remind me of the immeasurable debt You've forgiven me, and let that motivate me to forgive others. Heal the wounds in my heart that make forgiveness challenging. Help me to see others through Your eyes of compassion and love. When I struggle to forgive, fill me with Your Spirit and empower me to choose forgiveness. Teach me to forgive not just once, but seventy times seven, as Jesus instructed. Let forgiveness be a defining characteristic of my life, reflecting Your mercy and grace to the world around me. Thank You for Your endless forgiveness and for the freedom it brings. In Jesus' name, Amen.",
  },
  {
    title: "Day 8: Guidance",
    content:
      "Heavenly Father, I seek Your guidance in my life today and always. Your Word assures me that You will instruct me and teach me in the way I should go, that You will counsel me with Your loving eye on me. Lead me in the paths of righteousness for Your name's sake. I acknowledge that Your ways are higher than my ways, and Your thoughts higher than my thoughts. Show me the way I should go and give me the courage to follow Your leading. Illuminate the path before me with the light of Your Word. When I face crossroads and important decisions, grant me the wisdom to choose the way that honors You. Help me to recognize Your voice amidst the noise of the world and the clamor of my own desires. Guide my steps, direct my paths, and order my days according to Your perfect will. When I'm tempted to rely on my own understanding, remind me to trust in You with all my heart. Thank You for Your promise to guide me continually and to satisfy my needs in sun-scorched places. I trust in Your guidance, knowing that You have good plans for me, plans to prosper me and not to harm me, plans to give me hope and a future. In Jesus' name, Amen.",
  },
  {
    title: "Day 9: Patience",
    content:
      "Lord, I come before You today asking that You cultivate in me the fruit of patience. Your Word tells us that love is patient, and that we should be patient with everyone. Help me to wait upon You and to trust in Your perfect timing. In a world that values instant gratification, teach me the value of patient endurance. Give me patience with others, remembering that You have been infinitely patient with me. Help me to bear with one another in love, making allowance for each other's faults. Grant me patience in difficult circumstances, knowing that the testing of my faith produces perseverance. When I'm tempted to rush ahead of Your timing, remind me that those who wait upon the Lord will renew their strength. Give me patience with myself as I grow in faith, remembering that You who began a good work in me will carry it on to completion. Help me to run with perseverance the race marked out for me, fixing my eyes on Jesus. May my life be characterized by patient trust in Your promises and patient love towards others. Thank You for Your patient love towards me. In Jesus' name, Amen.",
  },
  {
    title: "Day 10: Compassion",
    content:
      "Compassionate Father, I come before You today asking that You open my eyes to the needs of those around me. Your Word tells us to be kind and compassionate to one another, forgiving each other, just as in Christ God forgave us. Fill my heart with Your compassion and move me to action. Help me to see others as You see them, with eyes of love and understanding. Give me a heart that breaks for what breaks Yours. Use me as an instrument of Your love and mercy in this world. When I encounter those who are hurting, give me the words to comfort and the actions to help. Help me to clothe myself with compassion, kindness, humility, gentleness, and patience. Teach me to bear others' burdens and so fulfill the law of Christ. Let Your compassion flow through me, bringing hope to the hopeless, comfort to the grieving, and help to those in need. May my life be a reflection of Your compassionate heart, drawing others to Your love. Thank You for Your compassion towards me, for Your mercies that are new every morning. In Jesus' name, Amen.",
  },
  {
    title: "Day 11: Humility",
    content:
      "God of grace, I come before You today asking that You teach me true humility. Your Word tells us to humble ourselves before You, and that You oppose the proud but give grace to the humble. Help me to think of others more highly than myself and to serve with a humble heart. May I decrease so that You may increase in my life. Guard me against pride and arrogance, remembering that pride goes before destruction, and a haughty spirit before a fall. Give me the humility to admit when I'm wrong and to ask for forgiveness. Help me to receive correction with gratitude, knowing that it leads to growth. Teach me to boast not in my own strengths or accomplishments, but in my weaknesses, so that Your power may rest on me. Let me follow the example of Christ, who humbled Himself and became obedient to death on a cross. Help me to clothe myself with humility towards others, knowing that You lift up the humble. May my life be characterized by humble dependence on You and humble service to others. Thank You for the grace You give to the humble. In Jesus' name, Amen.",
  },
  {
    title: "Day 12: Joy",
    content:
      "Lord of joy, I come before You today asking that You fill my heart with Your joy. Your Word tells us that the joy of the Lord is our strength, and that in Your presence there is fullness of joy. Let me rejoice in Your presence and find delight in Your Word. Help me to cultivate a joyful heart, even in difficult times, knowing that You work all things together for the good of those who love You. May Your joy be my strength, sustaining me through trials and tribulations. Teach me to rejoice always, to pray continually, and to give thanks in all circumstances, for this is Your will for me in Christ Jesus. When sorrow threatens to overwhelm me, remind me of the joy that comes from knowing You and being known by You. Help me to fix my eyes not on what is seen, but on what is unseen, for what is seen is temporary, but what is unseen is eternal. Let the joy of my salvation be restored daily, and may it overflow to those around me. Use me to bring Your joy to others, to be a light in dark places. Thank You for the promise of entering into Your joy eternally. In Jesus' name, Amen.",
  },
  {
    title: "Day 13: Perseverance",
    content:
      "Faithful God, I come before You today asking for the perseverance to run the race set before me. Your Word encourages us to run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith. Grant me the endurance to keep going, even when the path is difficult and the journey seems long. Help me to keep my eyes fixed on Jesus, the author and perfecter of my faith. When I feel like giving up, remind me of Your faithfulness and the crown of life that awaits those who persevere under trials. Give me strength to press on toward the goal to win the prize for which You have called me heavenward in Christ Jesus. Help me to consider it pure joy when I face trials of many kinds, knowing that the testing of my faith produces perseverance, and perseverance must finish its work so that I may be mature and complete, not lacking anything. May I not grow weary in doing good, for at the proper time I will reap a harvest if I do not give up. Let my life be characterized by steadfast faith and unwavering commitment to You. Thank You for Your promise that those who persevere will receive what You have promised. In Jesus' name, Amen.",
  },
  {
    title: "Day 14: Generosity",
    content:
      "Generous Father, I come before You today asking that You cultivate in me a spirit of generosity. Your Word tells us that You love a cheerful giver and that it is more blessed to give than to receive. Help me to give freely, just as You have given to me. May I be a cheerful giver, using my resources to bless others and further Your kingdom. Teach me to be generous not only with my money, but also with my time, talents, and love. Help me to see all that I have as gifts from You, entrusted to me to steward well and share with others. Guard my heart against greed and the love of money, reminding me that where my treasure is, there my heart will be also. Give me wisdom to use my resources in ways that honor You and bless others. Help me to store up treasures in heaven rather than on earth. May my life be characterized by open-handed generosity, reflecting Your generous heart to the world around me. Thank You for Your indescribable gift in Jesus Christ. May my generosity be a reflection of Your generosity towards me. In Jesus' name, Amen.",
  },
  {
    title: "Day 15: Courage",
    content:
      "Almighty God, I come before You today asking that You fill me with courage. Your Word tells us to be strong and courageous, for You are with us wherever we go. Help me to be strong and courageous, knowing that You are with me always. Give me boldness to stand for truth and to live out my faith, even in the face of opposition or persecution. When I feel afraid or uncertain, remind me that You have not given me a spirit of fear, but of power, love, and self-discipline. Grant me the courage to step out in faith when You call, trusting in Your guidance and provision. Help me to speak Your truth with love and boldness, even when it's difficult or unpopular. Give me the courage to confront injustice and to defend the weak and vulnerable. When I face giants in my life, help me to remember that the battle belongs to You. May my life be characterized by courageous faith that inspires others to trust in You. Thank You for the promise that You are my refuge and strength, an ever-present help in trouble. In Jesus' name, Amen.",
  },
  {
    title: "Day 16: Contentment",
    content:
      "Lord, I come before You today asking that You teach me to be content in all circumstances. Your Word tells us that godliness with contentment is great gain, and that we should be content with what we have because You have said, 'Never will I leave you; never will I forsake you.' Help me to trust in Your provision and to find my satisfaction in You alone. May I learn the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. Guard my heart against covetousness and the endless pursuit of more. Help me to see that true riches are found in knowing You and storing up treasures in heaven. When I'm tempted to compare myself to others, remind me of Your unique plan for my life and the blessings You've already given me. Teach me to be grateful for what I have rather than focusing on what I lack. May my life be characterized by joyful contentment that testifies to Your goodness and sufficiency. Thank You for the promise that You will meet all my needs according to the riches of Your glory in Christ Jesus. In His name, Amen.",
  },
  {
    title: "Day 17: Hope",
    content:
      "God of hope, I come before You today asking that You fill me with all joy and peace as I trust in You, so that I may overflow with hope by the power of the Holy Spirit. Your Word tells us that hope does not put us to shame, because Your love has been poured out into our hearts through the Holy Spirit. Let Your hope anchor my soul in times of uncertainty and trouble. When circumstances seem bleak, remind me of Your faithfulness in the past and Your promises for the future. Help me to set my hope fully on the grace to be given me when Jesus Christ is revealed. May the hope I have in You be a light in dark places, drawing others to Your love. Give me the courage to hope for the impossible, remembering that with You, all things are possible. Help me to persevere in hope, even when I can't see the way forward. May my life be characterized by confident hope in Your goodness and Your plans for me. Thank You for the living hope we have through the resurrection of Jesus Christ from the dead. In His name, Amen.",
  },
  {
    title: "Day 18: Integrity",
    content:
      "Righteous God, I come before You today asking for help to live a life of integrity. Your Word tells us that whoever walks in integrity walks securely, but whoever takes crooked paths will be found out. Help me to live in such a way that my actions align with my words, and may I be faithful in both public and private. Guide me to always choose what is right and honorable, even when no one is watching. Give me the strength to resist temptation and to maintain my integrity even when it comes at a personal cost. Help me to be truthful in all my dealings, remembering that lying lips are an abomination to You, but those who act faithfully are Your delight. When I'm tempted to compromise my values for personal gain, remind me that a good name is more desirable than great riches. May my life be characterized by consistent integrity that reflects Your character to the world around me. Thank You for the example of Jesus, who was tempted in every way, just as we are, yet was without sin. In His name, Amen.",
  },
  {
    title: "Day 19: Gentleness",
    content:
      "Gentle Shepherd, I come before You today asking that You cultivate in me a spirit of gentleness. Your Word tells us that a gentle answer turns away wrath, but a harsh word stirs up anger. Help me to respond to others with kindness and tenderness, even in challenging situations. May Your gentleness be evident in my words and actions. When I'm tempted to react in anger or frustration, remind me of Your gentle and humble heart. Help me to be gentle and patient, especially with those who are weak or struggling. Give me the wisdom to know when to speak softly and when to remain silent. May my gentleness be a soothing balm to those who are hurting and a witness to Your loving character. Help me to discipline and correct others with gentleness, remembering that I too am prone to faults and failures. May my life be characterized by the gentle strength that comes from trusting in You. Thank You for Your gentle and lowly heart, and for the rest You provide for our souls. In Jesus' name, Amen.",
  },
  {
    title: "Day 20: Faithfulness",
    content:
      "Faithful God, I come before You today asking for help to be faithful in all areas of my life. Your Word declares that Your love and faithfulness never cease, and that Your mercies are new every morning. Help me to be dependable in my commitments, loyal in my relationships, and steadfast in my faith. Let my life reflect Your unwavering faithfulness. When I'm tempted to give up or walk away, remind me of Your faithfulness to me and give me strength to persevere. Help me to be faithful in the small things, knowing that he who is faithful in little is also faithful in much. May I be known as someone who keeps their word and follows through on their promises. Give me the courage to remain faithful to You and Your truth, even when it's difficult or unpopular. Help me to be a faithful steward of all You've entrusted to me - my time, talents, resources, and relationships. May my faithfulness be a testimony to Your steadfast love and a source of encouragement to others. Thank You for Your great faithfulness that sustains me day by day. In Jesus' name, Amen.",
  },
  {
    title: "Day 21: Self-Control",
    content:
      "Lord, I come before You today asking that You grant me the fruit of self-control. Your Word tells us that a person without self-control is like a city broken into and left without walls. Help me to master my thoughts, emotions, and actions. Give me strength to resist temptation and to live a disciplined life that honors You. When I'm tempted to indulge in harmful behaviors or excessive desires, remind me that my body is a temple of the Holy Spirit. Help me to take captive every thought to make it obedient to Christ. Grant me the self-control to tame my tongue, remembering that the power of life and death is in the tongue. Give me discipline in my eating, drinking, spending, and use of time. Help me to exercise self-control in my reactions to others, especially when I'm angry or frustrated. May my life be characterized by the kind of self-control that leads to godliness and bears witness to the transforming power of Your Spirit. Thank You for the promise that I can do all things through Christ who strengthens me. In Jesus' name, Amen.",
  },
  {
    title: "Day 22: Unity",
    content:
      "God of peace, I come before You today praying for unity in the body of Christ. Your Word tells us how good and pleasant it is when God's people live together in unity. Help us to be one as You and the Father are one. May our love for one another be a testimony to the world of Your transforming power. Give us the humility to consider others better than ourselves and the wisdom to build each other up rather than tear each other down. Help us to bear with one another in love, making every effort to keep the unity of the Spirit through the bond of peace. When conflicts arise, give us grace to seek reconciliation and to forgive as we have been forgiven. Help us to celebrate our diversity while remaining united in our essential beliefs. May we be known by our love for one another, just as Jesus said His disciples would be. Let our unity be a powerful witness to a divided world of the reconciling power of the gospel. Thank You for making us one body in Christ, united by one Spirit. In Jesus' name, Amen.",
  },
  {
    title: "Day 23: Renewal",
    content:
      "Heavenly Father, I come before You today asking that You renew my mind. Your Word encourages us not to conform to the pattern of this world, but to be transformed by the renewing of our mind. Transform me by the power of Your Word. Help me to think on things that are true, noble, right, pure, lovely, and admirable. When negative thoughts threaten to overwhelm me, remind me to take every thought captive and make it obedient to Christ. Renew my passion for You and Your kingdom. Refresh my spirit when I feel weary or discouraged. Help me to put off my old self and to put on the new self, created to be like You in true righteousness and holiness. May Your Word dwell in me richly, renewing my mind and transforming my life. Let the words of my mouth and the meditation of my heart be pleasing in Your sight. Thank You for the promise that those who hope in You will renew their strength. In Jesus' name, Amen.",
  },
  {
    title: "Day 24: Servanthood",
    content:
      "Lord Jesus, You came not to be served but to serve and to give Your life as a ransom for many. I come before You today asking that You instill in me a servant's heart. Help me to serve others with humility and joy, following Your example of selfless love. When I'm tempted to seek my own interests first, remind me that the greatest among us is the servant of all. Give me eyes to see the needs around me and hands ready to help. Help me to use my gifts and talents not for my own glory, but for the benefit of others and the building up of Your kingdom. Teach me to serve not out of obligation or for recognition, but out of love for You and for others. When serving becomes difficult or thankless, remind me that whatever I do for the least of these, I do for You. May my life be characterized by humble service that points others to You. Thank You for the ultimate example of servanthood You gave us by washing Your disciples' feet and laying down Your life for us. In Your name, Amen.",
  },
  {
    title: "Day 25: Gratitude",
    content:
      "Gracious God, I come before You today with a heart full of thanksgiving. Your Word tells us to give thanks in all circumstances, for this is Your will for us in Christ Jesus. Help me to maintain an attitude of gratitude in all circumstances. Open my eyes to see Your blessings, both big and small, in my daily life. When I'm tempted to complain or focus on what I lack, remind me of all the ways You've provided for me and blessed me. Help me to cultivate a habit of thanksgiving, expressing gratitude to You and to others regularly. May my life be a constant expression of thankfulness to You, overflowing with praise for Your goodness and faithfulness. Let my gratitude be a witness to others of Your love and grace. Even in difficult times, help me to remember that You work all things together for the good of those who love You. Thank You for Your countless blessings, especially for the gift of salvation through Jesus Christ. May my gratitude lead me to a life of joyful obedience and service to You. In Jesus' name, Amen.",
  },
  {
    title: "Day 26: Boldness",
    content:
      "Holy Spirit, I come before You today asking that You fill me with boldness to share the gospel. Your Word tells us that You have not given us a spirit of fear, but of power, love, and self-discipline. Give me courage to speak Your truth in love and to be a witness for Christ in my daily life. When I feel intimidated or afraid to share my faith, remind me that the gospel is the power of God for salvation to everyone who believes. Help me to be ready at all times to give an answer for the hope that I have, with gentleness and respect. Grant me wisdom to know when to speak and what to say, and fill my mouth with Your words. May my life be a bold testimony to Your transforming power, both in word and in deed. Help me to overcome my fear of rejection or persecution, remembering that blessed are those who are persecuted for righteousness' sake. Thank You for the example of the apostles who spoke Your word with great boldness. May I, like them, be filled with the Holy Spirit and speak Your word boldly. In Jesus' name, Amen.",
  },
  {
    title: "Day 27: Discernment",
    content:
      "All-knowing God, I come before You today asking for discernment to distinguish between good and evil. Your Word tells us that solid food is for the mature, who by constant use have trained themselves to distinguish good from evil. Grant me discernment to recognize Your voice and to make wise choices that align with Your will. Help me to see beyond surface appearances and to understand the true nature of things. Give me wisdom to navigate the complexities of life, always choosing the path that honors You. When I face difficult decisions, help me to seek Your guidance and to trust in Your wisdom rather than leaning on my own understanding. Sharpen my spiritual senses so that I can discern truth from error, especially in matters of faith and doctrine. Help me to test everything and hold fast to what is good. May my powers of discernment grow as I study Your Word and walk closely with You. Thank You for the promise that if any of us lacks wisdom, we can ask You and You will give it generously. In Jesus' name, Amen.",
  },
  {
    title: "Day 28: Kindness",
    content:
      "Loving Father, I come before You today asking that Your kindness flow through me. Your Word tells us to be kind and compassionate to one another, forgiving each other, just as in Christ God forgave us. Help me to extend kindness to others, even when it's difficult. May my life be marked by acts of kindness that reflect Your love. When I'm tempted to respond with harshness or indifference, remind me of the kindness You've shown me. Help me to be kind not only to those who are kind to me, but also to those who are unkind, remembering that Your kindness leads to repentance. Give me eyes to see opportunities for kindness in my daily life and the courage to act on them. May my kindness be a soothing balm to those who are hurting and a light in dark places. Help me to speak words of kindness that build others up and bring encouragement. Let my kindness be genuine, flowing from a heart transformed by Your love. Thank You for Your loving kindness that is better than life itself. In Jesus' name, Amen.",
  },
  {
    title: "Day 29: Endurance",
    content:
      "Lord, I come before You today asking for endurance for the long journey of faith. Your Word encourages us to run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith. Help me to persevere through trials and to remain steadfast in my commitment to You. When I feel weary or discouraged, remind me that those who hope in You will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. Strengthen me to run with perseverance the race marked out for me. Help me to consider it pure joy when I face trials of many kinds, knowing that the testing of my faith produces perseverance, and perseverance must finish its work so that I may be mature and complete, not lacking anything. When the journey seems long and difficult, help me to remember that our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. May my life be characterized by steadfast faith and unwavering commitment to You. Thank You for Your promise that You will never leave me nor forsake me. In Jesus' name, Amen.",
  },
  {
    title: "Day 30: Purity",
    content:
      "Holy God, I come before You today asking that You create in me a pure heart. Your Word tells us that blessed are the pure in heart, for they will see God. Cleanse me from all unrighteousness and help me to pursue purity in my thoughts, words, and actions. May I be holy as You are holy. When I'm tempted to compromise my purity, remind me that my body is a temple of the Holy Spirit. Help me to flee from sexual immorality and to honor You with my body. Give me the strength to resist temptation and to make a covenant with my eyes not to look lustfully at others. Purify my mind, helping me to think about whatever is true, noble, right, pure, lovely, admirable, excellent or praiseworthy. Guard my heart, for it is the wellspring of life. Help me to live a life of integrity, where my private actions align with my public profession. May my life be characterized by purity that reflects Your holiness and draws others to You. Thank You for the promise that if we confess our sins, You are faithful and just to forgive us and purify us from all unrighteousness. In Jesus' name, Amen.",
  },
  {
    title: "Day 31: Trust",
    content:
      "Faithful Father, I come before You today asking that You increase my trust in You. Your Word tells us to trust in the Lord with all our heart and lean not on our own understanding. Help me to rely on Your promises and to have faith in Your unfailing love. When circumstances seem uncertain or frightening, remind me that You are in control and that Your plans for me are good. Give me the courage to step out in faith when You call, trusting that You will provide all I need. Help me to trust Your timing, even when answers to prayer seem delayed. When I'm tempted to worry or take matters into my own hands, help me to cast all my anxieties on You, knowing that You care for me. May my life be characterized by unwavering trust in Your goodness and faithfulness. Thank You for being trustworthy in all Your ways and faithful to all Your promises. In Jesus' name, Amen.",
  },
  {
    title: "Day 32: Obedience",
    content:
      "Lord, I come before You today asking for a heart of obedience. Your Word tells us that to obey is better than sacrifice, and to heed is better than the fat of rams. Help me to not just hear Your Word, but to do what it says. May my life be characterized by joyful obedience to Your commands. When I'm tempted to go my own way, remind me that Your ways are higher than my ways, and Your thoughts than my thoughts. Give me the courage to obey You even when it's difficult or doesn't make sense to my human understanding. Help me to trust that Your commands are for my good and for Your glory. May my obedience be prompt and wholehearted, flowing from love rather than duty. When I fail, give me the humility to repent and the strength to recommit to following Your ways. Thank You for the perfect example of obedience we have in Jesus, who was obedient to death, even death on a cross. In His name, Amen.",
  },
  {
    title: "Day 33: Mercy",
    content:
      "Merciful God, I come before You today asking that You help me to be an instrument of Your mercy. Your Word tells us to be merciful, just as our Father is merciful. Teach me to extend mercy to others as You have been merciful to me. When I'm tempted to judge or condemn others, remind me of the great mercy You've shown me. Help me to be quick to forgive and slow to judge, remembering that mercy triumphs over judgment. Give me a heart of compassion for those who are hurting or in need. Help me to show practical acts of mercy, meeting both spiritual and physical needs as I'm able. May my life be characterized by mercy that reflects Your loving kindness to the world around me. Thank You for Your mercy that is new every morning and for Your compassions that never fail. In Jesus' name, Amen.",
  },
  {
    title: "Day 34: Diligence",
    content:
      "Heavenly Father, I come before You today asking that You instill in me a spirit of diligence. Your Word tells us to work heartily, as for the Lord and not for men. Help me to be faithful in the tasks You've given me, both big and small. Give me the perseverance to complete what I start and the discipline to do my best work, even when no one is watching. When I feel lazy or unmotivated, remind me that whatever I do, I should do it all for Your glory. Help me to use my time wisely, making the most of every opportunity. May I be known as someone who is reliable and hardworking, bringing honor to Your name through my diligence. Thank You for the strength and ability You give me to work. May my diligence be a testimony to Your grace at work in my life. In Jesus' name, Amen.",
  },
  {
    title: "Day 35: Thankfulness",
    content:
      "God of all blessings, I come before You today asking that You cultivate in me a heart of thankfulness. Your Word instructs us to give thanks in all circumstances, for this is Your will for us in Christ Jesus. Help me to maintain an attitude of gratitude, recognizing that every good and perfect gift comes from You. When I'm tempted to complain or focus on what I lack, remind me of the countless ways You've blessed me. Give me eyes to see Your goodness in both the big and small things of life. May my life overflow with thanksgiving, not just in words but in deeds of gratitude and praise. Help me to express appreciation to others, recognizing that they too are gifts from You. Even in difficult times, help me to give thanks, trusting that You are working all things together for my good. Thank You for Your indescribable gift in Jesus Christ. May my thankfulness draw others to Your love and grace. In Jesus' name, Amen.",
  },
  {
    title: "Day 36: Zeal",
    content:
      "Lord, I come before You today asking that You ignite in me a zeal for Your house. Your Word tells us not to be lacking in zeal, but to keep our spiritual fervor, serving the Lord. May I never be lukewarm in my faith, but always fervent in spirit, serving You. When my passion for You and Your kingdom wanes, rekindle the fire of Your love in my heart. Help me to be zealous for good works, eager to do what is good. Give me a burning desire to know You more deeply and to make You known to others. May my zeal be guided by knowledge and tempered with wisdom, always expressing itself in love. Let my passion for You be evident in all I do, inspiring others to seek You wholeheartedly. Thank You for the example of Jesus, whose zeal for Your house consumed Him. May my life similarly be marked by passionate devotion to You and Your purposes. In Jesus' name, Amen.",
  },
  {
    title: "Day 37: Gentleness",
    content:
      "Gentle Savior, I come before You today asking that You help me to clothe myself with gentleness. Your Word tells us that a gentle answer turns away wrath, but a harsh word stirs up anger. May my words and actions be marked by Your tenderness. Help me to be gentle even with those who oppose me, remembering that I too was once in need of Your gentle correction. When I'm tempted to respond harshly or impatiently, remind me of Your gentleness towards me. Give me the strength to be gentle in a world that often values aggression and forcefulness. May my gentleness be evident to all, drawing others to the beauty of Your character. Help me to discipline and guide others with gentleness, always seeking to restore rather than to punish. Thank You for Your gentle and lowly heart, and for the rest You provide for our souls. May my life reflect Your gentleness to a hurting world. In Jesus' name, Amen.",
  },
  {
    title: "Day 38: Perseverance",
    content:
      "God of endurance, I come before You today asking that You grant me perseverance in my walk with You. Your Word encourages us to persevere under trials because when we have stood the test, we will receive the crown of life that You have promised to those who love You. Help me to press on toward the goal to win the prize for which You have called me heavenward in Christ Jesus. When I face obstacles or setbacks, give me the strength to keep going, remembering that You are with me. Help me to run with perseverance the race marked out for me, fixing my eyes on Jesus, the pioneer and perfecter of faith. When I'm tempted to give up, remind me of Your faithfulness and the eternal weight of glory that far outweighs our present troubles. May my life be characterized by steadfast endurance that inspires others to keep the faith. Thank You for Your promise that those who persevere under trials are blessed. In Jesus' name, Amen.",
  },
  {
    title: "Day 39: Humility",
    content:
      "Humble King, I come before You today asking that You teach me to walk in humility. Your Word tells us to humble ourselves before You, and You will lift us up. Help me to consider others better than myself and to serve with a humble heart. May I decrease so that You may increase in my life and in the lives of those around me. When I'm tempted to boast or seek my own glory, remind me that pride goes before destruction, and a haughty spirit before a fall. Give me the humility to admit when I'm wrong and to ask for forgiveness. Help me to receive correction with gratitude, knowing that it leads to growth. Teach me to boast not in my own strengths or accomplishments, but in my weaknesses, so that Your power may rest on me. May my life be characterized by the same humility that led Christ to empty Himself and take the form of a servant. Thank You for the promise that You give grace to the humble. In Jesus' name, Amen.",
  },
  {
    title: "Day 40: Love",
    content:
      "God of love, I come before You today asking that You fill me with Your perfect love. Your Word tells us that love is patient and kind, it does not envy or boast, it is not proud or rude, it is not self-seeking or easily angered, it keeps no record of wrongs, it does not delight in evil but rejoices with the truth. Help me to love others as You have loved me - unconditionally, sacrificially, and without reservation. May Your love flow through me, bringing healing and hope to those around me. When I find it difficult to love, remind me of the depth of Your love for me, demonstrated in sending Your Son to die for me while I was still a sinner. Help me to love not just in word or speech, but in action and in truth. Let Your love be the driving force behind my words, actions, and thoughts. Use me as a channel of Your love in this world that so desperately needs it. Thank You for Your unfailing love that never ceases and Your mercies that are new every morning. May my life be a reflection of Your love, drawing others to You. In Jesus' name, Amen.",
  },
  {
    title: "Day 41: Wisdom",
    content:
      "All-wise God, I come before You today asking for Your wisdom. Your Word tells us that if any of us lacks wisdom, we should ask You, who gives generously to all without finding fault. Give me understanding beyond my years and discernment in all my decisions. May Your wisdom guide my path in every area of life - in my relationships, my work, my studies, and my spiritual journey. When I face complex situations or difficult choices, help me to seek Your wisdom first, trusting that Your ways are higher than my ways and Your thoughts higher than my thoughts. Grant me the wisdom to know when to speak and when to remain silent, when to act and when to wait. Help me to apply Your wisdom practically in my daily life, making decisions that honor You and benefit others. May my life be characterized by the wisdom that comes from above, which is first pure, then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere. Thank You for the promise that Christ has become for us wisdom from God. In His name, Amen.",
  },
  {
    title: "Day 42: Patience",
    content:
      "Patient Father, I come before You today asking that You cultivate in me the fruit of patience. Your Word tells us that love is patient and that we should be patient with everyone. Help me to wait upon You and to trust in Your perfect timing. Give me patience with others, remembering that You have been infinitely patient with me. When I'm tempted to rush ahead or to grow frustrated with delays, remind me that a patient person calms a quarrel and that patience is better than pride. Help me to be slow to anger and quick to listen, knowing that my impatience often stems from selfishness or a lack of trust in Your sovereignty. Grant me patience in suffering, knowing that the testing of my faith produces perseverance. May I be patient in affliction, faithful in prayer, and joyful in hope. Help me to run with perseverance the race marked out for me, fixing my eyes on Jesus. May my life be characterized by patient endurance that reflects Your long-suffering nature to the world around me. Thank You for Your patience towards me, not wanting anyone to perish, but everyone to come to repentance. In Jesus' name, Amen.",
  },
  {
    title: "Day 43: Courage",
    content:
      "Mighty God, I come before You today asking that You fill me with courage. Your Word commands us to be strong and courageous, for You are with us wherever we go. Help me to be strong and courageous, knowing that You are with me always. Give me boldness to stand for truth and to live out my faith, even in the face of opposition or persecution. When I feel afraid or uncertain, remind me that You have not given me a spirit of fear, but of power, love, and self-discipline. Grant me the courage to step out in faith when You call, trusting in Your guidance and provision. Help me to speak Your truth with love and boldness, even when it's difficult or unpopular. Give me the courage to confront injustice and to defend the weak and vulnerable. When I face giants in my life, help me to remember that the battle belongs to You. May my life be characterized by courageous faith that inspires others to trust in You. Thank You for the promise that You are my refuge and strength, an ever-present help in trouble. In Jesus' name, Amen.",
  },
  {
    title: "Day 44: Faithfulness",
    content:
      "Faithful God, I come before You today asking for help to be faithful in all areas of my life. Your Word declares that Your love and faithfulness never cease, and that Your mercies are new every morning. Help me to be dependable in my commitments, loyal in my relationships, and steadfast in my faith. Let my life reflect Your unwavering faithfulness. When I'm tempted to give up or walk away, remind me of Your faithfulness to me and give me strength to persevere. Help me to be faithful in the small things, knowing that he who is faithful in little is also faithful in much. May I be known as someone who keeps their word and follows through on their promises. Give me the courage to remain faithful to You and Your truth, even when it's difficult or unpopular. Help me to be a faithful steward of all You've entrusted to me - my time, talents, resources, and relationships. May my faithfulness be a testimony to Your steadfast love and a source of encouragement to others. Thank You for Your great faithfulness that sustains me day by day. In Jesus' name, Amen.",
  },
  {
    title: "Day 45: Joy",
    content:
      "Lord of joy, I come before You today asking that You fill my heart with Your joy. Your Word tells us that the joy of the Lord is our strength and that in Your presence there is fullness of joy. Let me rejoice in Your presence and find delight in Your Word. Help me to cultivate a joyful heart, even in difficult times, knowing that You work all things together for the good of those who love You. May Your joy be my strength, sustaining me through trials and tribulations. Teach me to rejoice always, to pray continually, and to give thanks in all circumstances, for this is Your will for me in Christ Jesus. When sorrow threatens to overwhelm me, remind me of the joy that comes from knowing You and being known by You. Help me to fix my eyes not on what is seen, but on what is unseen, for what is seen is temporary, but what is unseen is eternal. Let the joy of my salvation be restored daily, and may it overflow to those around me. Use me to bring Your joy to others, to be a light in dark places. Thank You for the promise of entering into Your joy eternally. In Jesus' name, Amen.",
  },
  {
    title: "Day 46: Peace",
    content:
      "Prince of Peace, I come to You today seeking Your perfect peace. Your Word promises that You will keep in perfect peace those whose minds are steadfast, because they trust in You. Calm my anxious thoughts and still my restless heart. Let Your peace, which surpasses all understanding, guard my heart and mind in Christ Jesus. When chaos surrounds me, help me to remember that You are not a God of disorder but of peace. In the midst of conflict, make me an instrument of Your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; and where there is sadness, joy. Help me to seek peace and pursue it, knowing that peacemakers who sow in peace reap a harvest of righteousness. May the peace I have in You overflow to my relationships, my community, and beyond. Thank You for the peace we have with God through our Lord Jesus Christ. In His name, Amen.",
  },
  {
    title: "Day 47: Generosity",
    content:
      "Generous Father, I come before You today asking that You cultivate in me a spirit of generosity. Your Word tells us that a generous person will prosper, and that whoever refreshes others will be refreshed. Help me to give freely, just as You have given to me. May I be a cheerful giver, using my resources to bless others and further Your kingdom. When I'm tempted to hold back or to give grudgingly, remind me of Your promise that whoever sows generously will also reap generously. Give me wisdom to use my time, talents, and treasures in ways that honor You and benefit others. Help me to be generous not just with my money, but also with my time, my attention, and my love. May my life be characterized by open-handed generosity, reflecting Your generous heart to the world around me. Thank You for Your indescribable gift in Jesus Christ. May my generosity be a reflection of Your generosity towards me. In Jesus' name, Amen.",
  },
  {
    title: "Day 48: Hope",
    content:
      "God of hope, I come before You today asking that You fill me with all joy and peace as I trust in You, so that I may overflow with hope by the power of the Holy Spirit. Your Word tells us that hope does not put us to shame, because Your love has been poured out into our hearts through the Holy Spirit. Let Your hope anchor my soul in times of uncertainty and trouble. When circumstances seem bleak, remind me of Your faithfulness in the past and Your promises for the future. Help me to set my hope fully on the grace to be given me when Jesus Christ is revealed. May the hope I have in You be a light in dark places, drawing others to Your love. Give me the courage to hope for the impossible, remembering that with You, all things are possible. Help me to persevere in hope, even when I can't see the way forward. May my life be characterized by confident hope in Your goodness and Your plans for me. Thank You for the living hope we have through the resurrection of Jesus Christ from the dead. In His name, Amen.",
  },
  {
    title: "Day 49: Gratitude",
    content:
      "Heavenly Father, I come before You with a heart full of gratitude. Thank You for Your faithfulness throughout this journey of prayer. Your Word instructs us to give thanks in all circumstances, for this is Your will for us in Christ Jesus. Help me to continue cultivating a spirit of thankfulness in all circumstances. Open my eyes to see Your blessings, both big and small, in my daily life. When I'm tempted to complain or focus on what I lack, remind me of all the ways You've provided for me and blessed me. Help me to express gratitude not only to You but also to others, recognizing that every good gift comes from You. May my life be a constant expression of thankfulness, overflowing with praise for Your goodness and faithfulness. Let my gratitude be a witness to others of Your love and grace. Even in difficult times, help me to remember that You work all things together for the good of those who love You. Thank You for Your countless blessings, especially for the gift of salvation through Jesus Christ. May my gratitude lead me to a life of joyful obedience and service to You. In Jesus' name, Amen.",
  },
  {
    title: "Day 50: Commitment",
    content:
      "Lord, as I conclude this 50-day prayer journey, I recommit my life to You. Thank You for Your presence, guidance, and transforming power throughout this time. Your Word calls us to present our bodies as a living sacrifice, holy and acceptable to You, which is our spiritual worship. Help me to continue growing in faith, love, and obedience. May this journey be just the beginning of a deeper, more intimate relationship with You. I commit to seeking You daily in prayer and in Your Word. Help me to apply the lessons I've learned and to continue developing the spiritual disciplines we've practiced. When I'm tempted to return to old patterns or to neglect my time with You, remind me of the joy and peace I've found in Your presence. I commit my ways to You, trusting that You will make my paths straight. Use me as an instrument of Your love and grace in the world. May my life be a living testimony to Your goodness and faithfulness. Thank You for Your steadfast love and for Your promise to complete the good work You've begun in me. I look forward with anticipation to continuing this journey of faith with You. In Jesus' name, Amen.",
  },
]

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [progress, setProgress] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lastPrayerDate, setLastPrayerDate] = useState<string | null>(null)

  useEffect(() => {
    const savedProgress = localStorage.getItem("prayerProgress")
    const savedStreak = localStorage.getItem("prayerStreak")
    const savedLastPrayerDate = localStorage.getItem("lastPrayerDate")

    if (savedProgress) {
      setProgress(Number.parseInt(savedProgress))
    }
    if (savedStreak) {
      setStreak(Number.parseInt(savedStreak))
    }
    if (savedLastPrayerDate) {
      setLastPrayerDate(savedLastPrayerDate)
    }

    updateStreak()
  }, [])

  const updateStreak = () => {
    const today = new Date().toDateString()
    if (lastPrayerDate !== today) {
      if (lastPrayerDate === new Date(Date.now() - 86400000).toDateString()) {
        // If last prayer was yesterday, increment streak
        setStreak(streak + 1)
      } else {
        // If last prayer was not yesterday, reset streak
        setStreak(1)
      }
      setLastPrayerDate(today)
      localStorage.setItem("lastPrayerDate", today)
      localStorage.setItem("prayerStreak", streak.toString())
    }
  }

  const handleNext = () => {
    if (currentSection < prayerSections.length - 1) {
      setCurrentSection(currentSection + 1)
      setProgress(progress + 1)
      localStorage.setItem("prayerProgress", (progress + 1).toString())
      updateStreak()
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold">Daily Prayer Journey</h1>
              <SettingsButton />
            </div>
            <StreakTracker streak={streak} />
            <ProgressTracker progress={progress} total={prayerSections.length} />
            <PrayerSection
              section={prayerSections[currentSection]}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isLast={currentSection === prayerSections.length - 1}
              isFirst={currentSection === 0}
            />
            <ReflectionInput />
            <PrayerTimer />
            <RandomVerse />
            <DailyChallenge />
          </div>
        </div>
      </div>
    </div>
  )
}

