const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// библиотека для логирования
const morgan = require("morgan");
// библиотека для парсинга куки
const cookieParser = require("cookie-parser");
// библиотека для сессий
const session = require("express-session");
// модуль для работы с путями в файловой системе
const path = require("path");
// импорт класса для хранения сессий
const MongoStore = require("connect-mongo");
const bcrypt = require("bcrypt");
// импорт middleware для проверки сессий

// const User = require("./models/users");
// const Stat=require("./models/stats")
const userRouter=require('./routers/userRouter')
const cartRouter=require('./routers/cartRouter')


function cookiesCleaner(req, res, next) {
  // если куки есть и нет текущей сессии, то чистим куки
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
}

const sessionChecker = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/');
  } else {
    next();
  }
};

const saltRounds = 10;
const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const options = {
  store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/crypto" }),
  // ключ
  key: "user_sid",
  secret: "anything here",
  resave: false,
  saveUninitialized: false,
  cookie: {
    // срок жизин куки
    expires: 1000 * 60 * 10,
  },
};
// подключаем middleware для использования сессий
const sessionMiddleware = session(options);

app.use(sessionMiddleware);
// подключаем middleware для чистки куки
app.use(cookiesCleaner);


// app.use("/:id/shoppingcart", cryptoRouter)
app.use("/cart", cartRouter)
app.use("/", userRouter );



// app.route('/statistic')
// .get(async (req, res)=>{
//   const stats = await Stat.find().lean();
//   res.json(stats);
// })
// .post(async (req, res)=>{

//   try{
//     const stats = req.body;
//     stats.username = req.session.user.username; 
//     const newStat=await Stat.create(stats)
//     // await User.findOneAndUpdate({username:req.session.user.username}, {$push:{stats: newStat._id}})
//     res.sendStatus(200);
//   }
//   catch(error){
//     return res.sendStatus(501);
//   }
// })

// app
//   .route("/signup")
//   // обработка формы регистрации
//   .post(async (req, res, next) => {
//     try {
//       // деструктуризация тела запроса
//       const { username, password } = req.body.values;
//       // создание нового юзера
//       const user = new User({
//         username,
//         // хэширование его пароля
//         password: await bcrypt.hash(password, saltRounds),
//       });
//       // сохранение в бд
//       await user.save();
//       // устанавливаем сессии локально
//       req.session.user = user;
//       // console.log(req.session.user, "sign up req session user");
//       return res.status(201).json({ userId: user.id, username: user.username });
//       // редиректим
//     } catch (error) {
//       // иначе переходим к обработчику ошибок
//       res.sendStatus(501);
//     }
//   });
// // ручка для логина
// app.route("/login").post(async (req, res) => {
//   try {
//     const { username, password } = req.body.values;
//     // ищем юзера в базе данных
//     const user = await User.findOne({ username });
//     // проверка (если юзер есть и пароль совпадает)
//     if (user && (await bcrypt.compare(password, user.password))) {
//       // тогда создаем новую локальную сессию
//       req.session.user = user;
//       // console.log(req.session.user, "login req session user");

//       return res.status(202).json({ userId: user.id, username: user.username });
//     } else res.status(404).json({error:true})
//   } catch (err) {
//     return res.sendStatus(502);
//   }
//   // деструктуризация тела запроса с формы
// });

// app.get("/logout", (req, res, next) => {
//   console.log(req.session.user, 'logout req s u');
//   req.session.destroy((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.clearCookie("user_sid");
//     // return res.redirect('/');
//     return res.sendStatus(203);
//   });
// });

app.listen(PORT, async () => {
  mongoose
    .connect("mongodb://localhost:27017/crypto", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("sucsess connect to mongoose"))
    .catch(() => console.log("error connect to mongoose"));
  console.log(`Server started at port:${PORT}`);
});
