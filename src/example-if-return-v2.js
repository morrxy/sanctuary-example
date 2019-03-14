import * as S from "sanctuary";

// use this way to replace:
// repeat if + return, and finally do sth, like:
// const val = 'some val'
// if (cond1(val)) {
//   return
// }
// if (cond2(val)) {
//   return
// }
// if (cond3(val)) {
//   return
// }
// work(val)

const showArg = v => {
  console.log('arg: ' + S.show(v));
  return v;
};

const drawLine = () => {
  console.log("==========");
};

const gt0 = S.either(x => S.Left(x))(x =>
  x > 0 ? S.Right(x) : S.Left("v must > 0")
);

const lt20 = S.either(x => S.Left(x))(x =>
  x < 20 ? S.Right(x) : S.Left("v must < 20")
);

const isEven = S.either(x => S.Left(x))(x =>
  x % 2 === 0 ? S.Right(x) : S.Left("v must be even")
);

const work = S.either(x => console.log("err: " + x))(x =>
  console.log("work with ", x)
);

const myWork = S.pipe([showArg, gt0, lt20, isEven, work, drawLine]);

myWork(S.Left("left val"));
myWork(S.Right(-1));
myWork(S.Right(21));
myWork(S.Right(3));
myWork(S.Right(8));
