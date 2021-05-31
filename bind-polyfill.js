Function.prototype.bind = function (ctx) {
    const args = Array.prototype.slice.call(arguments, 1)

    const self = this

    const bound = function () {
        return self.apply(ctx, Array.prototype.concat.apply(args, arguments))
    }

    bound.unbind = function() {
        return self
    }

    return bound
}