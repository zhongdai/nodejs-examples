"""
A python simulation of the Promise in nodejs
"""
from typing import Callable

def promise_func(resolve: Callable, reject: Callable):
    if resolve is None and reject:
        reject('Failed')
    elif resolve and reject is None:
        resolve('Success')
    else:
        pass


class Promise(object):
    def __init__(self, promise: Callable):
        self.__p = promise

    def then(self, f: Callable):
        self.__p(f, None)
        return self

    def catch(self, f: Callable):
        self.__p(None, f)
        return self

    def final(self, f: Callable):
        f()
        return self


def main():
    p = Promise(promise_func)

    (
      p.then(lambda x: print('then ' + x))
       .catch(lambda x: print('catch ' + x))
       .final(lambda: print('Completed'))
    )


if __name__ == '__main__':
    main()
