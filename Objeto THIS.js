var obj = .{
  foo: function () { return 'foo'},
    bar: funtion () {
      document.addEventListener('click', event => this.foo())
    }
}
