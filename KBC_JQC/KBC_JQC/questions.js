const ROUND_CONFIG = {
    1: { name: "Round 1 – સામાન્ય જ્ઞાન", timer: 30, isBuzzer: false, limit: 30 },
    99: { name: "⚠️ TIE BREAKER ⚠️", timer: 15, isBuzzer: true, limit: 3 }
};

const quizQuestions = [
    // ---------------- ROUND 1 (General Knowledge, Science, & Geography) ----------------
    { roundId: 1, question: "What is the capital city of Canada?", options: { A: "Toronto", B: "Ottawa", C: "Vancouver", D: "Montreal" }, answer: "B", image: null },
    { roundId: 1, question: "Which ocean is on Canada's west coast?", options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Pacific Ocean", D: "Arctic Ocean" }, answer: "C", image: null },
    { roundId: 1, question: "How many provinces does Canada have?", options: { A: "8", B: "10", C: "12", D: "13" }, answer: "B", image: null },
    { roundId: 1, question: "What is the longest river in Canada?", options: { A: "Fraser River", B: "St. Lawrence River", C: "Mackenzie River", D: "Yukon River" }, answer: "C", image: null },
    { roundId: 1, question: "Which leaf appears on the Canadian flag?", options: { A: "Oak", B: "Maple", C: "Pine", D: "Birch" }, answer: "B", image: null },
    { roundId: 1, question: "Which continent is Canada located in?", options: { A: "Europe", B: "Asia", C: "North America", D: "South America" }, answer: "C", image: null },
    { roundId: 1, question: "Which animal is Canada's national animal?", options: { A: "Moose", B: "Beaver", C: "Polar Bear", D: "Wolf" }, answer: "B", image: null },
    { roundId: 1, question: "Which is the largest province in Canada by area?", options: { A: "Ontario", B: "British Columbia", C: "Quebec", D: "Alberta" }, answer: "C", image: null },
    { roundId: 1, question: "Which Canadian province is home to Niagara Falls?", options: { A: "Ontario", B: "Quebec", C: "Manitoba", D: "Nova Scotia" }, answer: "A", image: null },
    { roundId: 1, question: "What is the main language spoken in Quebec?", options: { A: "English", B: "French", C: "Spanish", D: "German" }, answer: "B", image: null },

    // ---------------- Science & Space ----------------
    { roundId: 1, question: "What is the largest planet in our Solar System?", options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Saturn" }, answer: "C", image: null },
    { roundId: 1, question: "Which gas do plants absorb from the air?", options: { A: "Oxygen", B: "Carbon Dioxide", C: "Nitrogen", D: "Helium" }, answer: "B", image: null },
    { roundId: 1, question: "What is the freezing point of water?", options: { A: "0°C", B: "10°C", C: "32°C", D: "100°C" }, answer: "A", image: null },
    { roundId: 1, question: "Which instrument measures temperature?", options: { A: "Barometer", B: "Thermometer", C: "Compass", D: "Scale" }, answer: "B", image: null },
    { roundId: 1, question: "Which planet is known as the Red Planet?", options: { A: "Venus", B: "Mars", C: "Mercury", D: "Neptune" }, answer: "B", image: null },
    { roundId: 1, question: "What is the chemical formula of water?", options: { A: "H2O", B: "CO2", C: "O2", D: "H2" }, answer: "A", image: null },
    { roundId: 1, question: "What is Earth's natural satellite?", options: { A: "Sun", B: "Moon", C: "Mars", D: "Venus" }, answer: "B", image: null },
    { roundId: 1, question: "What type of star is the Sun?", options: { A: "Red", B: "Yellow", C: "Blue", D: "White" }, answer: "B", image: null },
    { roundId: 1, question: "What is the speed of light?", options: { A: "300,000 km/s", B: "200,000 km/s", C: "100,000 km/s", D: "500,000 km/s" }, answer: "A", image: null },
    { roundId: 1, question: "How many bones are there in the human body?", options: { A: "196", B: "206", C: "216", D: "226" }, answer: "B", image: null },
    { roundId: 1, question: "What gives blood its red color?", options: { A: "Plasma", B: "Hemoglobin", C: "Platelets", D: "Water" }, answer: "B", image: null },
    { roundId: 1, question: "Electric current is measured in which unit?", options: { A: "Volt", B: "Ampere", C: "Watt", D: "Ohm" }, answer: "B", image: null },
    { roundId: 1, question: "What is the hardest natural substance?", options: { A: "Iron", B: "Diamond", C: "Gold", D: "Silver" }, answer: "B", image: null },

    // ---------------- India & Gujarat (History & Geo) ----------------
    { roundId: 1, question: "Which freedom fighter from Gujarat was known as 'Dungli Chor' (Onion Thief)?", options: { A: "Mohanlal Pandya", B: "Zaverchand Meghani", C: "Ravishankar Maharaj", D: "Indulal Yagnik" }, answer: "A", image: null },
    { roundId: 1, question: "Who founded the Maurya Empire?", options: { A: "Chandragupta Maurya", B: "Bindusara", C: "Ashoka", D: "Harshavardhana" }, answer: "A", image: null },
    { roundId: 1, question: "Who is known as the Iron Man of India?", options: { A: "Jawaharlal Nehru", B: "Sardar Vallabhbhai Patel", C: "Lal Bahadur Shastri", D: "Bhagat Singh" }, answer: "B", image: null },
    { roundId: 1, question: "What is the capital of India?", options: { A: "Mumbai", B: "Kolkata", C: "New Delhi", D: "Chennai" }, answer: "C", image: null },
    { roundId: 1, question: "What is the national animal of India?", options: { A: "Lion", B: "Tiger", C: "Elephant", D: "Cheetah" }, answer: "B", image: null },
    { roundId: 1, question: "What is the national bird of India?", options: { A: "Peacock", B: "Pigeon", C: "Eagle", D: "Swan" }, answer: "A", image: null },
    { roundId: 1, question: "What is the national flower of India?", options: { A: "Rose", B: "Lotus", C: "Jasmine", D: "Sunflower" }, answer: "B", image: null },
    { roundId: 1, question: "What is the capital of Gujarat?", options: { A: "Ahmedabad", B: "Vadodara", C: "Gandhinagar", D: "Surat" }, answer: "C", image: null },
    { roundId: 1, question: "Whose statue is the Statue of Unity?", options: { A: "Mahatma Gandhi", B: "Sardar Vallabhbhai Patel", C: "Subhas Chandra Bose", D: "Bhagat Singh" }, answer: "B", image: null },
    { roundId: 1, question: "When is Gujarat Foundation Day celebrated?", options: { A: "1 May", B: "15 August", C: "26 January", D: "2 October" }, answer: "A", image: null },
    { roundId: 1, question: "Gir National Park is famous for which animal?", options: { A: "Tiger", B: "Lion", C: "Elephant", D: "Cheetah" }, answer: "B", image: null },
    { roundId: 1, question: "In which district is the Somnath Temple located?", options: { A: "Junagadh", B: "Gir Somnath", C: "Rajkot", D: "Jamnagar" }, answer: "B", image: null },
    { roundId: 1, question: "In which city is the Dwarkadhish Temple located?", options: { A: "Dwarka", B: "Porbandar", C: "Jamnagar", D: "Veraval" }, answer: "A", image: null },

    // ---------------- Mythology (Ramayana & Mahabharata) ----------------
    { roundId: 1, question: "What was the name of Lord Rama's sister?", options: { A: "Sumitra", B: "Shanta", C: "Urmila", D: "Kaushalya" }, answer: "B", image: null },
    { roundId: 1, question: "Which musical instrument was Ravana an expert at playing?", options: { A: "Tabla", B: "Flute", C: "Veena", D: "Drum" }, answer: "C", image: null },
    { roundId: 1, question: "Lakshman is considered an avatar of whom?", options: { A: "Sheshnag", B: "Vishnu", C: "Shiva", D: "Brahma" }, answer: "A", image: null },
    { roundId: 1, question: "What disguise did Ravana take while kidnapping Sita?", options: { A: "King", B: "Sage", C: "Deer", D: "Monkey" }, answer: "B", image: null },
    { roundId: 1, question: "In which Kanda of the Ramayana did Hanuman first meet Lord Rama?", options: { A: "Bala Kanda", B: "Ayodhya Kanda", C: "Kishkindha Kanda", D: "Sundara Kanda" }, answer: "C", image: null },
    { roundId: 1, question: "Who was Karna's father?", options: { A: "Indra", B: "Surya", C: "Vayu", D: "Agni" }, answer: "B", image: null },
    { roundId: 1, question: "What was the name of Arjuna's chariot?", options: { A: "Nandighosha", B: "Kapidhwaja", C: "Garudadhwaja", D: "Pushpaka" }, answer: "B", image: null },
    { roundId: 1, question: "What was the name of Lord Krishna's conch?", options: { A: "Devadatta", B: "Panchajanya", C: "Paundra", D: "Anantavijaya" }, answer: "B", image: null },
    { roundId: 1, question: "For how many days was Bhishma the commander during the Kurukshetra War?", options: { A: "10 days", B: "12 days", C: "15 days", D: "18 days" }, answer: "A", image: null },
    { roundId: 1, question: "Who was Abhimanyu's mother?", options: { A: "Draupadi", B: "Kunti", C: "Subhadra", D: "Gandhari" }, answer: "C", image: null },

    // ---------------- World Geography & Sports ----------------
    { roundId: 1, question: "Which is the largest ocean on Earth?", options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Arctic Ocean", D: "Pacific Ocean" }, answer: "D", image: null },
    { roundId: 1, question: "What is the highest mountain in the world?", options: { A: "K2", B: "Mount Everest", C: "Kangchenjunga", D: "Nanga Parbat" }, answer: "B", image: null },
    { roundId: 1, question: "The Nile River is located on which continent?", options: { A: "Asia", B: "Europe", C: "Africa", D: "Australia" }, answer: "C", image: null },
    { roundId: 1, question: "Which is the largest desert in the world?", options: { A: "Sahara", B: "Thar", C: "Gobi", D: "Kalahari" }, answer: "A", image: null },
    { roundId: 1, question: "How many players are there on a cricket team?", options: { A: "9", B: "10", C: "11", D: "12" }, answer: "C", image: null },
    { roundId: 1, question: "How often are the Olympic Games held?", options: { A: "Every 2 years", B: "Every 3 years", C: "Every 4 years", D: "Every 5 years" }, answer: "C", image: null },
    { roundId: 1, question: "Which organization organizes the FIFA World Cup?", options: { A: "ICC", B: "FIFA", C: "IOC", D: "BCCI" }, answer: "B", image: null },

    // ---------------- Mathematics ----------------
    { roundId: 1, question: "How many sides does a hexagon have?", options: { A: "5", B: "6", C: "7", D: "8" }, answer: "B", image: null },
    { roundId: 1, question: "What is 9 × 8?", options: { A: "64", B: "72", C: "81", D: "96" }, answer: "B", image: null },
    { roundId: 1, question: "25 x 4 + 10", options: { A: "100", B: "110", C: "120", D: "150" }, answer: "B", image: null },
    { roundId: 1, question: "Square root of 144 is what?", options: { A: "10", B: "12", C: "14", D: "16" }, answer: "B", image: null },
    { roundId: 1, question: "Sum of all three angles of triangle is?", options: { A: "90°", B: "180°", C: "270°", D: "360°" }, answer: "B", image: null },
    { roundId: 1, question: "10% of 200 = ?", options: { A: "10", B: "15", C: "20", D: "25" }, answer: "C", image: null },
    { roundId: 1, question: "Decimal value of 3/4?", options: { A: "0.25", B: "0.5", C: "0.75", D: "1.25" }, answer: "C", image: null }, // Fixed Typo

    // ---------------- General Knowledge / Misc ----------------
    { roundId: 1, question: "Who wrote the Harry Potter book series?", options: { A: "Roald Dahl", B: "J.K. Rowling", C: "Rick Riordan", D: "C.S. Lewis" }, answer: "B", image: null },
    { roundId: 1, question: "How many hours are there in one day?", options: { A: "12", B: "18", C: "24", D: "36" }, answer: "C", image: null },
    { roundId: 1, question: "When is World Environment Day celebrated?", options: { A: "June 5", B: "June 6", C: "June 7", D: "June 8" }, answer: "A", image: null },
    { roundId: 1, question: "Identify the Person", options: { A: "આલ્બર્ટ આઇન્સ્ટાઇન", B: "ગેલેલિયો", C: "બ્રુનો", D: "ન્યૂટન" }, answer: "A", image: "Images/Albert Einstain.jpg" },

    // ---------------- ⭐ NEWLY ADDED INTERESTING QUESTIONS ⭐ ----------------
    { roundId: 1, question: "Who was the first Indian citizen to travel into space?", options: { A: "Kalpana Chawla", B: "Rakesh Sharma", C: "Sunita Williams", D: "Vikram Sarabhai" }, answer: "B", image: null },
    { roundId: 1, question: "Which element is said to keep Superman weak?", options: { A: "Vibranium", B: "Adamantium", C: "Kryptonite", D: "Uranium" }, answer: "C", image: null },
    { roundId: 1, question: "Which planet in our solar system has the most moons?", options: { A: "Earth", B: "Jupiter", C: "Saturn", D: "Uranus" }, answer: "C", image: null },
    { roundId: 1, question: "In computer science, what does 'HTTP' stand for?", options: { A: "HyperText Transfer Protocol", B: "High Transfer Technology Process", C: "HyperText Transmission Path", D: "Hyperlink Transfer Technology" }, answer: "A", image: null },
    { roundId: 1, question: "What is the national heritage animal of India?", options: { A: "Tiger", B: "Elephant", C: "Lion", D: "Snow Leopard" }, answer: "B", image: null },
    { roundId: 1, question: "Which is the smallest country in the world by land area?", options: { A: "Monaco", B: "Nauru", C: "Vatican City", D: "Malta" }, answer: "C", image: null },
    { roundId: 1, question: "Who is known as the 'Father of the Indian Constitution'?", options: { A: "Mahatma Gandhi", B: "Jawaharlal Nehru", C: "Dr. B.R. Ambedkar", D: "Sardar Patel" }, answer: "C", image: null },
    { roundId: 1, question: "What is the hardest muscle in the human body?", options: { A: "Heart", B: "Jaw Muscle (Masseter)", C: "Tongue", D: "Glutes" }, answer: "B", image: null },
    { roundId: 1, question: "In which year did the Titanic sink?", options: { A: "1905", B: "1912", C: "1920", D: "1918" }, answer: "B", image: null },
    { roundId: 1, question: "Which invention is Thomas Edison most famous for?", options: { A: "Telephone", B: "Lightbulb", C: "Automobile", D: "Airplane" }, answer: "B", image: null },

    // ---------------- TIE BREAKER ----------------
    { roundId: 99, question: "How many Teeth Aastha has?", options: { A: "32", B: "37", C: "30", D: "23" }, answer: "C", image: null},
    { roundId: 99, question: "Which Gas is 78% in the atmosphere?", options: { A: "Oxygen", B: "Carbon Dioxide", C: "Nitrogen", D: "Hydrogen" }, answer: "C", image: null},
    { roundId: 99, question: "Who was the first female President of India?", options: { A: "Sonia Gandhi", B: "Draupadi Murmu", C: "Indira Gandhi", D: "Pratibha Patil" }, answer: "D", image: null} // Fixed Answer Key
];