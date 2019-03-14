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

// > 0
const gt0 = S.maybe_(() => {
  console.log("skip gt0");
  return S.Nothing;
})(v => {
  if (v > 0) {
    return S.Just(v);
  } else {
    console.log("v must > 0");
    return S.Nothing;
  }
});

// < 20
const lt20 = S.maybe_(() => {
  console.log("skip lt20");
  return S.Nothing;
})(v => {
  if (v < 20) {
    return S.Just(v);
  } else {
    console.log("v must < 20");
    return S.Nothing;
  }
});

// is even
const isEven = S.maybe_(() => {
  console.log("skip isEven");
  return S.Nothing;
})(v => {
  if (v % 2 === 0) {
    return S.Just(v);
  } else {
    console.log("v must be even");
    return S.Nothing;
  }
});

const work = S.maybe_(() => {
  console.log("skip work");
  return S.Nothing;
})(v => {
  console.log(`do sth with ${v}`);
});

const showArg = v => {
  console.log(S.show(v));
  return v;
};

const drawLine = () => {
  console.log("==========");
};

const myWork = S.pipe([showArg, gt0, lt20, isEven, work, drawLine]);

myWork(S.Nothing);
myWork(S.Just(-1));
myWork(S.Just(21));
myWork(S.Just(3));
myWork(S.Just(8));
