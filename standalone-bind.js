function bind(fn, ctx) {
    if (typeof fn !== 'function') throw new TypeErro(fn + ' is not a function')

    const args = Array.prototype.slice.call(arguments, 2)

    const bound = function () {
        return fn.apply(ctx, Array.prototype.concat.apply(args, arguments))
    }

    bound.unbind = function() {
        return fn
    }

    return bound
}