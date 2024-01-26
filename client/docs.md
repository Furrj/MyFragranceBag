# App
1. loggedIn, validationCompleted = False
2. useEffect 1: Subscribe window resize to handleResize
3. useEffect 2: loggedIn = validate()
4. validationCompleted = True
    A. AppCont goes from "Loading..." to relevant content
5. If !loggedIn, send to Login
6. If logged in, set userData with validated data

# Validation
1. If localStorage has relevant variables
    A. Send validation request to server
    B. If valid:
        a. loggedIn = True
2. validationCompleted = True

# Game
1. Questions generated on ActiveGame start according to settings
    A. Generated questions stored in questions
    B. When question is answered, stored in answeredQuestions
    C. When endGame() is called in ActiveGame, postGameStats are calculated
        I. Operations in form of e.g. "add,sub,mul,div"