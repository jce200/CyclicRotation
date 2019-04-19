const min = 0;
const max = 100;

function between(x, min, max) {
    return min <= x && x <= max;
}

function arrCheck(arr) {
    if (Array.isArray(arr) && arr.length !== 0) {
        for (let el of arr) {
            if (!(-1000 <= el && el <= 1000)) {
                return false;
            }
        }
        return true;
    }
    return 0;
}

function checkConditions(A, K) {
    if (Number.isInteger(K) && Number.isInteger(A.length)) {
        if (between(K, min, max) && arrCheck(A)) {
            return true;
        }
    }
}

function solution(A, K) {
    if (checkConditions(A, K)) {
        let aClone = [...A];
        for (i = 0; i < K; i++) {
            const last = aClone.pop();
            aClone.unshift(last);
        }
        return aClone;
    }
    return A;
}

solution(A, K);