/**
 * Created by sidson_aidson on 22/04/2017.
 */


module.exports = function (arr, is_equal) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Array expected '+typeof arr + " given");
    }

    var len = arr.length;
    var cnt = -1;

    for (;cnt++ < len;) {
        var j = cnt + 1;

        for (; j < arr.length; ++j) {
            if(typeof is_equal == "function")
            {
                if (is_equal(arr[cnt], arr[j]) == true)
                {
                    arr.splice(j--, 1);
                }
            }
            else
            {
                var strict = is_equal || false;

                if(strict)
                {
                    if (arr[cnt] === arr[j])
                    {
                        arr.splice(j--, 1);
                    }
                }
                else {
                    if (arr[cnt] == arr[j])
                    {
                        arr.splice(j--, 1);
                    }
                }

            }

        }
    }
    return arr;
};

module.exports.nonmutate = function (arr, is_equal) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Array expected '+typeof arr + " given");
    }

    var new_array = arr.slice();

    return module.exports(new_array, is_equal);
};