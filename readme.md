# 🎮 Anime Guesser

An interactive browser game where you try to guess anime characters from a blurred image.  
The blur decreases with each wrong guess, and you get hints along the way!

---

## ✨ Features
- Randomly selects an anime character each round 🎲
- Start with a heavily blurred image 🔍
- 10 guesses per round
- Each wrong guess:
  - Decreases blur
  - Shows your guess history
  - Unlocks character and anime hints (at 7 and 3 guesses left)
- Correct guess = ✅ Instant reveal + new round
- Out of guesses = ❌ Reveal answer + reset

---

## 🖼️ Gameplay
1. The image starts blurred.
2. Type your guess (character’s name).
3. If wrong:
   - Blur decreases.
   - Your guess gets added to the list.
   - At 7 guesses → character description hint.
   - At 3 guesses → anime title hint.
4. If correct or guesses run out → image revealed and a new round starts.

## Tech Stack
- HTML5
- CSS3 (custom pointer, blur filter)
- JavaScript (DOM, event listeners, game logic)