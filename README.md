# Wol[free](https://wolfreealpha.github.io/)Alpha

#### Free Wolfram Alpha Step-by-Step Solutions
- [**Try it now**](https://wolfreealpha.github.io/), it's gratis!
- Unlock FREE access to full [Wolfram|Alpha Step-by-Step Solutions](https://www.wolframalpha.com/examples/pro-features/step-by-step-solutions/).
- Facilitate the use of [Wolfram|Alpha Show Steps API](https://products.wolframalpha.com/show-steps-api/documentation/).

#### 30 second demo video
https://user-images.githubusercontent.com/35728132/124412317-cecc9b00-dd80-11eb-98bd-77b8b0ee50ce.mp4

#### Contributing
- Start a [discussion](https://docs.github.com/en/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions) to ask questions and collaborate with maintainers.
- Create an [issue](https://docs.github.com/en/github/managing-your-work-on-github/creating-an-issue) to request new features or report bugs.
- Open a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) to submit a patch.

#### Branching
- `main` is the *unstable development* branch for *daily* builds.
- `release` is the *stable production* branch for *deployable* builds.

#### Workflow
- Every pull request spins up a disposable [Deploy Preview](https://app.netlify.com/sites/wolfreealpha/deploys).
- Maintainers merge `main` into `release` once it has acquired enough functionalities or fixes.
- Github then deploys `release` to http://WolfreeAlpha.github.io automagically.

#### License
- [MIT License](https://github.com/WolfreeAlpha/WolfreeAlpha.github.io/blob/main/LICENSE)

# Examples
Two-Dimensional Expression Input:  
[lim_n->inf (1+i/n)^n = int_-inf^i e^tdt = sum_n=0^inf i^n/n! = e^sqr-1](https://wolfreealpha.github.io/#lim%5fn%2d%3Einf%20%281%2Bi%2Fn%29%5En%20%3D%20int%5f%2dinf%5Ei%20e%5Etdt%20%3D%20sum%5fn%3D0%5Einf%20i%5En%2Fn%21%20%3D%20e%5Esqr%2d1)  
Subscripts are typeset with the underscore, while superscripts are made with the caret.

## Differential Equations
See how separable equations are solved:  
[solve y' = y^2 x](https://wolfreealpha.github.io/#solve%20y%27%20%3D%20y%5E2%20x)  
[y'(x) = (x + 2) e^(-y(x)), y(0) = 0](https://wolfreealpha.github.io/#y%27%28x%29%20%3D%20%28x%20%2B%202%29%20e%5E%28%2dy%28x%29%29%2C%20y%280%29%20%3D%200)  
[sec(y(t)) y'(t) + sin(t - y(t)) = sin(t + y(t))](https://wolfreealpha.github.io/#sec%28y%28t%29%29%20y%27%28t%29%20%2B%20sin%28t%20%2d%20y%28t%29%29%20%3D%20sin%28t%20%2B%20y%28t%29%29)  
Solve first-order linear equations:  
[y'(t) - 2y(t) = 3 e^(2t)](https://wolfreealpha.github.io/#y%27%28t%29%20%2d%202y%28t%29%20%3D%203%20e%5E%282t%29)  
[x y'(x) - 4 y(x) = x^6 exp(x), y(1) = 0](https://wolfreealpha.github.io/#x%20y%27%28x%29%20%2d%204%20y%28x%29%20%3D%20x%5E6%20exp%28x%29%2C%20y%281%29%20%3D%200)  
See steps that use Laplace transforms to solve an ODE:  
[solve y'(t) - 3y(t) = delta(t - 2), where y(0) = 0](https://wolfreealpha.github.io/#solve%20y%27%28t%29%20%2d%203y%28t%29%20%3D%20delta%28t%20%2d%202%29%2C%20where%20y%280%29%20%3D%200)  
Solve exact equations:  
[(3x + 2y)y' + 2x + 3y = 0 where y(0) = 2](https://wolfreealpha.github.io/#%283x%20%2B%202y%29y%27%20%2B%202x%20%2B%203y%20%3D%200%20where%20y%280%29%20%3D%202)  
[solve t + arctan(y(t)) + (t + y(t))/(1 + y(t)^2) y'(t) = 0](https://wolfreealpha.github.io/#solve%20t%20%2B%20arctan%28y%28t%29%29%20%2B%20%28t%20%2B%20y%28t%29%29%2F%281%20%2B%20y%28t%29%5E2%29%20y%27%28t%29%20%3D%200)  
Transform into an exact equation:  
[2 t exp(2y)y' = 3 t^4 + exp(2y)](https://wolfreealpha.github.io/#2%20t%20exp%282y%29y%27%20%3D%203%20t%5E4%20%2B%20exp%282y%29)  
Learn to solve Bernoulli equations:  
[y'(x) - y = e^x y^2](https://wolfreealpha.github.io/#y%27%28x%29%20%2d%20y%20%3D%20e%5Ex%20y%5E2)  
[x'(t) = x(t)(t x(t)^3 - 1)](https://wolfreealpha.github.io/#x%27%28t%29%20%3D%20x%28t%29%28t%20x%28t%29%5E3%20%2d%201%29)  
Apply a linear substitution:  
[v' = t sin(2v + t) - 1/2, v(0) = pi/2](https://wolfreealpha.github.io/#v%27%20%3D%20t%20sin%282v%20%2B%20t%29%20%2d%201%2F2%2C%20v%280%29%20%3D%20pi%2F2)  
Solve a first-order homogeneous equation through a substitution:  
[solve x y' = y\*(log(x) - log(y))](https://wolfreealpha.github.io/#solve%20x%20y%27%20%3D%20y%2a%28log%28x%29%20%2d%20log%28y%29%29)  
Make general substitutions:  
[solve 2 t^3 y'(t) = 1 + sqrt(1 + 4 t^2 y(t))](https://wolfreealpha.github.io/#solve%202%20t%5E3%20y%27%28t%29%20%3D%201%20%2B%20sqrt%281%20%2B%204%20t%5E2%20y%28t%29%29)  
[y'(x) = (1-x cos(y(x))) cot(y(x))](https://wolfreealpha.github.io/#y%27%28x%29%20%3D%20%281%2dx%20cos%28y%28x%29%29%29%20cot%28y%28x%29%29)  
Solve a Riccati equation:  
[x^2 v'(x) + 2 x v(x) = x^4 v(x)^2 + 4](https://wolfreealpha.github.io/#x%5E2%20v%27%28x%29%20%2B%202%20x%20v%28x%29%20%3D%20x%5E4%20v%28x%29%5E2%20%2B%204)  
[solve y' = y^2/x^2 - y/x + 1, y(1) = 0](https://wolfreealpha.github.io/#solve%20y%27%20%3D%20y%5E2%2Fx%5E2%20%2d%20y%2Fx%20%2B%201%2C%20y%281%29%20%3D%200)  
Solve an Abel equation of the first kind with a constant invariant:  
[y'(x) = e^(2x) x y(x)^3 - y(x) - x e^(-x), y(0) = 0](https://wolfreealpha.github.io/#y%27%28x%29%20%3D%20e%5E%282x%29%20x%20y%28x%29%5E3%20%2d%20y%28x%29%20%2d%20x%20e%5E%28%2dx%29%2C%20y%280%29%20%3D%200)  
Solve a Chini equation with a constant invariant:  
[2 x'(t) + t = 4sqrt(x(t))](https://wolfreealpha.github.io/#2%20x%27%28t%29%20%2B%20t%20%3D%204sqrt%28x%28t%29%29)  
See the steps for solving Clairaut's equation:  
[y(x) = x y'(x) + y'(x)^2](https://wolfreealpha.github.io/#y%28x%29%20%3D%20x%20y%27%28x%29%20%2B%20y%27%28x%29%5E2)  
Solve d'Alembert's equation:  
[x(t) = t x'(t)^2 + x'(t)](https://wolfreealpha.github.io/#x%28t%29%20%3D%20t%20x%27%28t%29%5E2%20%2B%20x%27%28t%29)  
See how first-order ordinary differential equations are solved:  
[solve y' = 2((y + 2)/(x + y - 1))^2, y(1) = 0](https://wolfreealpha.github.io/#solve%20y%27%20%3D%202%28%28y%20%2B%202%29%2F%28x%20%2B%20y%20%2d%201%29%29%5E2%2C%20y%281%29%20%3D%200)  
[t y(t) (1 + t y(t)^2) y'(t) = 1](https://wolfreealpha.github.io/#t%20y%28t%29%20%281%20%2B%20t%20y%28t%29%5E2%29%20y%27%28t%29%20%3D%201)  
Solve a second-order constant-coefficient linear homogeneous equation:  
[x''(t) = -k x(t)](https://wolfreealpha.github.io/#x%27%27%28t%29%20%3D%20%2dk%20x%28t%29)  
[solve y''(t) + 5y'(t) + 6y(t) = 0, y(0) = 1, y'(0) = 0](https://wolfreealpha.github.io/#solve%20y%27%27%28t%29%20%2B%205y%27%28t%29%20%2B%206y%28t%29%20%3D%200%2C%20y%280%29%20%3D%201%2C%20y%27%280%29%20%3D%200)  
Solve a constant-coefficient linear equation with multiple methods:  
[solve y''+ y = sin(2x)](https://wolfreealpha.github.io/#solve%20y%27%27%2B%20y%20%3D%20sin%282x%29)  
[x'' - 2x' - 8x = 3e^(-2t), x(0) = 0, x'(0) = 1](https://wolfreealpha.github.io/#x%27%27%20%2d%202x%27%20%2d%208x%20%3D%203e%5E%28%2d2t%29%2C%20x%280%29%20%3D%200%2C%20x%27%280%29%20%3D%201)  
See steps that use Laplace transforms to solve an ODE:  
[y''(t) + 2 y'(t) + 2 y(t) = cos(t) delta(t - 3 pi), y(0) = 1, y'(0) = -1](https://wolfreealpha.github.io/#y%27%27%28t%29%20%2B%202%20y%27%28t%29%20%2B%202%20y%28t%29%20%3D%20cos%28t%29%20delta%28t%20%2d%203%20pi%29%2C%20y%280%29%20%3D%201%2C%20y%27%280%29%20%3D%20%2d1)  
Reduce to a first-order equation:  
[t x''(t) - 2 x'(t) = 10 t^4](https://wolfreealpha.github.io/#t%20x%27%27%28t%29%20%2d%202%20x%27%28t%29%20%3D%2010%20t%5E4)  
[y''(x) + y'(x)^2 = 0](https://wolfreealpha.github.io/#y%27%27%28x%29%20%2B%20y%27%28x%29%5E2%20%3D%200)  
Derive the equation of a catenary curve:  
[solve v''(x)^2 = (1+v'(x)^2), v(0) = 1, v'(0) = 0](https://wolfreealpha.github.io/#solve%20v%27%27%28x%29%5E2%20%3D%20%281%2Bv%27%28x%29%5E2%29%2C%20v%280%29%20%3D%201%2C%20v%27%280%29%20%3D%200)  
Solve Euler-Cauchy equations:  
[solve x^2 y''(x) - x y'(x) + y(x) = 0](https://wolfreealpha.github.io/#solve%20x%5E2%20y%27%27%28x%29%20%2d%20x%20y%27%28x%29%20%2B%20y%28x%29%20%3D%200)  
[x^2 y'' - y = 0](https://wolfreealpha.github.io/#x%5E2%20y%27%27%20%2d%20y%20%3D%200)  
[2t^2\*y'' + t\*y' - 3\*y = t, y(1) = 0, y'(1) = 1](https://wolfreealpha.github.io/#2t%5E2%2ay%27%27%20%2B%20t%2ay%27%20%2d%203%2ay%20%3D%20t%2C%20y%281%29%20%3D%200%2C%20y%27%281%29%20%3D%201)  
See how general second-order ordinary differential equations are solved:  
[t y''(t) - t y'(t) + y(t) = 2, y(0) = 2, y'(0) = -4](https://wolfreealpha.github.io/#t%20y%27%27%28t%29%20%2d%20t%20y%27%28t%29%20%2B%20y%28t%29%20%3D%202%2C%20y%280%29%20%3D%202%2C%20y%27%280%29%20%3D%20%2d4)  
[solve y''(t) + sin(y(t)) = 0](https://wolfreealpha.github.io/#solve%20y%27%27%28t%29%20%2B%20sin%28y%28t%29%29%20%3D%200)  
[y'' - 2 cot(x) y' + (1+2cot(x)^2) y = 0](https://wolfreealpha.github.io/#y%27%27%20%2d%202%20cot%28x%29%20y%27%20%2B%20%281%2B2cot%28x%29%5E2%29%20y%20%3D%200)  
[y''(x) + tan(x) y'(x) + sec(x)^2 y(x)==0](https://wolfreealpha.github.io/#y%27%27%28x%29%20%2B%20tan%28x%29%20y%27%28x%29%20%2B%20sec%28x%29%5E2%20y%28x%29%3D%3D0)  
[x^4\*y\*y" + x^4\*y'\*y' + 3\*x^3\*y\*y' = 1](https://wolfreealpha.github.io/#x%5E4%2ay%2ay%22%20%2B%20x%5E4%2ay%27%2ay%27%20%2B%203%2ax%5E3%2ay%2ay%27%20%3D%201)  
[x^2y'' + xy' + (x^2-1/4)y=0](https://wolfreealpha.github.io/#x%5E2y%27%27%20%2B%20xy%27%20%2B%20%28x%5E2%2d1%2F4%29y%3D0)  
See the steps for higher-order equations:  
[solve y''''(x) + 16y(x) = 0](https://wolfreealpha.github.io/#solve%20y%27%27%27%27%28x%29%20%2B%2016y%28x%29%20%3D%200)  
[y''' - 2y'' + y' = 2 - 24e^t + 40e^(5t), y(0) = 1, y'(0) = 0, y''(0) = -1](https://wolfreealpha.github.io/#y%27%27%27%20%2d%202y%27%27%20%2B%20y%27%20%3D%202%20%2d%2024e%5Et%20%2B%2040e%5E%285t%29%2C%20y%280%29%20%3D%201%2C%20y%27%280%29%20%3D%200%2C%20y%27%27%280%29%20%3D%20%2d1)  
[y''' - y'' + y' - y = cosh(x)](https://wolfreealpha.github.io/#y%27%27%27%20%2d%20y%27%27%20%2B%20y%27%20%2d%20y%20%3D%20cosh%28x%29)  
[y''''''(t) - 4y'''''(t) + 7y''''(t) - 4y'''(t) - 4y''(t) + 8y'(t) - 4y(t) = 0](https://wolfreealpha.github.io/#y%27%27%27%27%27%27%28t%29%20%2d%204y%27%27%27%27%27%28t%29%20%2B%207y%27%27%27%27%28t%29%20%2d%204y%27%27%27%28t%29%20%2d%204y%27%27%28t%29%20%2B%208y%27%28t%29%20%2d%204y%28t%29%20%3D%200)

## Calculus
Find the derivative using the product rule, chain rule and other methods:  
[d/dx sqrt(x)](https://wolfreealpha.github.io/#d%2Fdx%20sqrt%28x%29)  
[derivative of x^4 + 9x^3 + 7x - 2](https://wolfreealpha.github.io/#derivative%20of%20x%5E4%20%2B%209x%5E3%20%2B%207x%20%2d%202)  
[slope of log(t) / (t^2 + 1)](https://wolfreealpha.github.io/#slope%20of%20log%28t%29%20%2F%20%28t%5E2%20%2B%201%29)  
Find partial derivatives of multivariate expressions:  
[partial derivative of exp(-x^2 - y^2)](https://wolfreealpha.github.io/#partial%20derivative%20of%20exp%28%2dx%5E2%20%2d%20y%5E2%29)  
[partial derivative of cos( 3 pi /4 * x + 5 pi /3 * y + pi / 2 * z) with respect to y](https://wolfreealpha.github.io/#partial%20derivative%20of%20cos%28%203%20pi%20%2F4%20%2a%20x%20%2B%205%20pi%20%2F3%20%2a%20y%20%2B%20pi%20%2F%202%20%2a%20z%29%20with%20respect%20to%20y)  
Calculate an indefinite integral by substitution, integration by parts and other methods:  
[integrate sin(x)cos(x)^2](https://wolfreealpha.github.io/#integrate%20sin%28x%29cos%28x%29%5E2)  
[integral of sqrt(a^2 - x^2)](https://wolfreealpha.github.io/#integral%20of%20sqrt%28a%5E2%20%2d%20x%5E2%29)  
[show the integration: arcsec(sqrt(t))](https://wolfreealpha.github.io/#show%20the%20integration%3A%20arcsec%28sqrt%28t%29%29)  
See the steps for definite integration over an interval:  
[integrate sin(t)^2cos(t) from 0 to pi/2](https://wolfreealpha.github.io/#integrate%20sin%28t%29%5E2cos%28t%29%20from%200%20to%20pi%2F2)  
[integrate 1/(x^2 + 1), x = -infinity ... infinity](https://wolfreealpha.github.io/#integrate%201%2F%28x%5E2%20%2B%201%29%2C%20x%20%3D%20%2dinfinity%20%2e%2e%2e%20infinity)  
[integrate 1/(cos(x) + 2) from 0 to 2pi](https://wolfreealpha.github.io/#integrate%201%2F%28cos%28x%29%20%2B%202%29%20from%200%20to%202pi)  
Learn how to take a limit:  
[limit of (x - 3) / (x^2 - 2x - 3) as x approaches 3](https://wolfreealpha.github.io/#limit%20of%20%28x%20%2d%203%29%20%2F%20%28x%5E2%20%2d%202x%20%2d%203%29%20as%20x%20approaches%203)  
[take the limit as x goes to infinity: (1 + 1/x)^x](https://wolfreealpha.github.io/#take%20the%20limit%20as%20x%20goes%20to%20infinity%3A%20%281%20%2B%201%2Fx%29%5Ex)  
[limit t\*tan(t) as t->pi/2 from the left](https://wolfreealpha.github.io/#limit%20t%2atan%28t%29%20as%20t%2d%3Epi%2F2%20from%20the%20left)  
[lim (x^2 + 2x + 3)/(x^2 - 2x - 3) as x->3+](https://wolfreealpha.github.io/#lim%20%28x%5E2%20%2B%202x%20%2B%203%29%2F%28x%5E2%20%2d%202x%20%2d%203%29%20as%20x%2d%3E3%2B)  
Find local and global extrema using a variety of tests:  
[local extrema of x^3 - 3x + 1](https://wolfreealpha.github.io/#local%20extrema%20of%20x%5E3%20%2d%203x%20%2B%201)  
[find the extrema of 3x^4 - 4x^3 - 12x^2 + 1](https://wolfreealpha.github.io/#find%20the%20extrema%20of%203x%5E4%20%2d%204x%5E3%20%2d%2012x%5E2%20%2B%201)  
[maximize sin(x)](https://wolfreealpha.github.io/#maximize%20sin%28x%29)  
Find a tangent line to a curve using the derivative at a point:  
[tangent line to sin(x) - 1 at x=0](https://wolfreealpha.github.io/#tangent%20line%20to%20sin%28x%29%20%2d%201%20at%20x%3D0)  
[tangent line of y=x^2 at x=1](https://wolfreealpha.github.io/#tangent%20line%20of%20y%3Dx%5E2%20at%20x%3D1)  
Calculate a multivariate tangent plane by examining partial derivatives:  
[tangent plane to z=x^2+y^2 at x=1,y=1](https://wolfreealpha.github.io/#tangent%20plane%20to%20z%3Dx%5E2%2By%5E2%20at%20x%3D1%2Cy%3D1)  
Get hints for discontinuities:  
[where is (x^2 - 4)/(x^2 - 2x - 3) discontinuous?](https://wolfreealpha.github.io/#where%20is%20%28x%5E2%20%2d%204%29%2F%28x%5E2%20%2d%202x%20%2d%203%29%20discontinuous%3F)  
[discontinuities of sin((x^2-x)/(x-1)) + log(sqrt(abs(x)))](https://wolfreealpha.github.io/#discontinuities%20of%20sin%28%28x%5E2%2dx%29%2F%28x%2d1%29%29%20%2B%20log%28sqrt%28abs%28x%29%29%29)  
Calculate inflection points step by step:  
[inflection points x^3 - 3 x^2 + 1](https://wolfreealpha.github.io/#inflection%20points%20x%5E3%20%2d%203%20x%5E2%20%2B%201)  
[points of inflection t * cbrt(t^2 - 4)](https://wolfreealpha.github.io/#points%20of%20inflection%20t%20%2a%20cbrt%28t%5E2%20%2d%204%29)  
[inflection points of 3sin(2x)](https://wolfreealpha.github.io/#inflection%20points%20of%203sin%282x%29)  
[inflection pts sgn(x)|x|^(3/2) + x^3 - 3x^2 + 1 over -2 < x < 3](https://wolfreealpha.github.io/#inflection%20pts%20sgn%28x%29%7Cx%7C%5E%283%2F2%29%20%2B%20x%5E3%20%2d%203x%5E2%20%2B%201%20over%20%2d2%20%3C%20x%20%3C%203)  
Learn how to compute the area between curves:  
[area between 1/2x(x-2)(x+2) and x](https://wolfreealpha.github.io/#area%20between%201%2F2x%28x%2d2%29%28x%2B2%29%20and%20x)  
[area of the region between y=x and y=x^2 for -1/2<x<1](https://wolfreealpha.github.io/#area%20of%20the%20region%20between%20y%3Dx%20and%20y%3Dx%5E2%20for%20%2d1%2F2%3Cx%3C1)  
Calculate the arc length of a curve step by step:  
[arc length of Sin\[x\] for x between 0 and 2pi](https://wolfreealpha.github.io/#arc%20length%20of%20Sin%5Bx%5D%20for%20x%20between%200%20and%202pi)  
Specify the curve in polar coordinates:  
[arc length of r=theta^2 for 0<theta<2pi](https://wolfreealpha.github.io/#arc%20length%20of%20r%3Dtheta%5E2%20for%200%3Ctheta%3C2pi)  
Specify the curve parametrically:  
[arc length of {Sin\[x\], Cos\[x\], x, x} for 0<x<3pi](https://wolfreealpha.github.io/#arc%20length%20of%20%7BSin%5Bx%5D%2C%20Cos%5Bx%5D%2C%20x%2C%20x%7D%20for%200%3Cx%3C3pi)

## Proofs
See the steps toward proving a trigonometric identity:  
[(1 + tan(x))/(1 - tan(x)) = (cos(x) + sin(x))/(cos(x) - sin(x))](https://wolfreealpha.github.io/#%281%20%2B%20tan%28x%29%29%2F%281%20%2d%20tan%28x%29%29%20%3D%20%28cos%28x%29%20%2B%20sin%28x%29%29%2F%28cos%28x%29%20%2d%20sin%28x%29%29)  
Prove a sum identity by induction:  
[prove by induction sum of j from 1 to n = n(n+1)/2 for n>0](https://wolfreealpha.github.io/#prove%20by%20induction%20sum%20of%20j%20from%201%20to%20n%20%3D%20n%28n%2B1%29%2F2%20for%20n%3E0)  
Prove divisibility by induction:  
[using induction, prove 9^n-1 is divisible by 4 assuming n>0](https://wolfreealpha.github.io/#using%20induction%2C%20prove%209%5En%2d1%20is%20divisible%20by%204%20assuming%20n%3E0)  
Prove an inequality by induction:  
[prove by induction (3n)! > 3^n (n!)^3 for n>0](https://wolfreealpha.github.io/#prove%20by%20induction%20%283n%29%21%20%3E%203%5En%20%28n%21%29%5E3%20for%20n%3E0)

## Algebra
Solve equations one step at a time:  
[x^2 + 5x + 6 = 0](https://wolfreealpha.github.io/#x%5E2%20%2B%205x%20%2B%206%20%3D%200)  
Factor polynomials step by step:  
[factor x^3+2x^2+x+2](https://wolfreealpha.github.io/#factor%20x%5E3%2B2x%5E2%2Bx%2B2)  
Expand polynomials using FOIL, the binomial theorem and other methods:  
[expanded form of (x + 3)^2](https://wolfreealpha.github.io/#expanded%20form%20of%20%28x%20%2B%203%29%5E2)  
Learn to rewrite a rational function using our step-by-step partial fraction decomposition:  
[partial fraction decomposition 1/(x^2 + 4x + 3)](https://wolfreealpha.github.io/#partial%20fraction%20decomposition%201%2F%28x%5E2%20%2B%204x%20%2B%203%29)

## Discrete Mathematics
Find step-by-step solutions for prime factorization, primality testing, GCD and more:  
[is 73 prime?](https://wolfreealpha.github.io/#is%2073%20prime%3F)  
[lcm(90, 342)](https://wolfreealpha.github.io/#lcm%2890%2C%20342%29)  
[are 12 and 21 coprime?](https://wolfreealpha.github.io/#are%2012%20and%2021%20coprime%3F)  
Follow the steps to convert between bases:  
[convert 33ab3653 base 12 to base 10](https://wolfreealpha.github.io/#convert%2033ab3653%20base%2012%20to%20base%2010)

## Linear Algebra
Compute properties of a matrix step by step:  
[{{2,4,4},{1,2,2},{0,7,3}}](https://wolfreealpha.github.io/#%7B%7B2%2C4%2C4%7D%2C%7B1%2C2%2C2%7D%2C%7B0%2C7%2C3%7D%7D)  
Find the determinant step by step with various methods:  
[determinant of {{1,2,1}, {1,1,0}, {0,1,1}}](https://wolfreealpha.github.io/#determinant%20of%20%7B%7B1%2C2%2C1%7D%2C%20%7B1%2C1%2C0%7D%2C%20%7B0%2C1%2C1%7D%7D)  
Compute eigenvalues and eigenvectors step by step:  
[eigenvalues {{3,-1},{0,2}}](https://wolfreealpha.github.io/#eigenvalues%20%7B%7B3%2C%2d1%7D%2C%7B0%2C2%7D%7D)  
Compute a cross product step by step:  
[(1,2,3)x(3,4,5)](https://wolfreealpha.github.io/#%281%2C2%2C3%29x%283%2C4%2C5%29)

## Geometry
Compute properties of geometric objects step by step:  
[area of a circle with radius 2](https://wolfreealpha.github.io/#area%20of%20a%20circle%20with%20radius%202)  
Learn details of some geometric computations:  
[distance between (3, 2) and (5, 1)](https://wolfreealpha.github.io/#distance%20between%20%283%2C%202%29%20and%20%285%2C%201%29)  
[slope of line through (2, 3) and (4, -1)](https://wolfreealpha.github.io/#slope%20of%20line%20through%20%282%2C%203%29%20and%20%284%2C%20%2d1%29)  
Determine the equation of a line with certain properties using a selected form:  
[equation of line through (2, 5), (4, 1)](https://wolfreealpha.github.io/#equation%20of%20line%20through%20%282%2C%205%29%2C%20%284%2C%201%29)

## Statistics
Perform basic statistical analysis on a set of data, seeing the steps along the way:  
[average of {1, 2, 3, 4, 5, 6, 7}](https://wolfreealpha.github.io/#average%20of%20%7B1%2C%202%2C%203%2C%204%2C%205%2C%206%2C%207%7D)  
[mode of {1, 5, 4, 2, 3, 4, 5, 11, 4, 11, 20}](https://wolfreealpha.github.io/#mode%20of%20%7B1%2C%205%2C%204%2C%202%2C%203%2C%204%2C%205%2C%2011%2C%204%2C%2011%2C%2020%7D)  
[variance 4, 6, 7, 9, 10, 11](https://wolfreealpha.github.io/#variance%204%2C%206%2C%207%2C%209%2C%2010%2C%2011)  
[quartile of {1, 2, 3, 4, 5, 6}](https://wolfreealpha.github.io/#quartile%20of%20%7B1%2C%202%2C%203%2C%204%2C%205%2C%206%7D)

## Chemistry
Get a step-by-step procedure to draw the Lewis structures of molecules:  
[What is the Lewis structure of NO2](https://wolfreealpha.github.io/#What%20is%20the%20Lewis%20structure%20of%20NO2)  
Follow the steps for unit conversion:  
[convert 5mL benzene to moles](https://wolfreealpha.github.io/#convert%205mL%20benzene%20to%20moles)  
Learn how to balance a chemical reaction:  
[glucose + oxygen -> water + carbon dioxide](https://wolfreealpha.github.io/#glucose%20%2B%20oxygen%20%2d%3E%20water%20%2B%20carbon%20dioxide)  
Compute oxidation states of chemicals:  
[oxidation states of chromium(III) chloride](https://wolfreealpha.github.io/#oxidation%20states%20of%20chromium%28III%29%20chloride)

## Physics Formulas
Compute mechanical work:  
[work F=30N, d=100m](https://wolfreealpha.github.io/#work%20F%3D30N%2C%20d%3D100m)  
Compute centripetal acceleration:  
[centripetal acceleration, 30mph, 500 ft](https://wolfreealpha.github.io/#centripetal%20acceleration%2C%2030mph%2C%20500%20ft)  
Compute a Doppler shift:  
[Doppler shift 300Hz, 75mph](https://wolfreealpha.github.io/#Doppler%20shift%20300Hz%2C%2075mph)  
Do computations using the thin lens equation:  
[lens, f=20ft, o=400ft](https://wolfreealpha.github.io/#lens%2C%20f%3D20ft%2C%20o%3D400ft)  
Compute a diffraction pattern for a circular aperture:  
[circular aperture a=0.2mm, lambda=650nm](https://wolfreealpha.github.io/#circular%20aperture%20a%3D0%2e2mm%2C%20lambda%3D650nm)  
Compute a diffraction pattern for a single slit:  
[single slit diffraction d=1/16 inch, lambda=200nm](https://wolfreealpha.github.io/#single%20slit%20diffraction%20d%3D1%2F16%20inch%2C%20lambda%3D200nm)  
Do relativistic addition of velocities:  
[add velocities, 8e7 m/s, 8e7 m/s](https://wolfreealpha.github.io/#add%20velocities%2C%208e7%20m%2Fs%2C%208e7%20m%2Fs)  
Compute relativistic momentum:  
[relativistic momentum electron, 0.8c](https://wolfreealpha.github.io/#relativistic%20momentum%20electron%2C%200%2e8c)  
Determine gravitational time dilation near massive objects:  
[gravitational time dilation at 1000 km and 100 solar masses](https://wolfreealpha.github.io/#gravitational%20time%20dilation%20at%201000%20km%20and%20100%20solar%20masses)  
Compute the orbital period of a massive body orbiting another:  
[Kepler's third law, 4 solar masses, 5 Earth masses, 2.5 AU](https://wolfreealpha.github.io/#Kepler%27s%20third%20law%2C%204%20solar%20masses%2C%205%20Earth%20masses%2C%202%2e5%20AU)  
Calculate flow through a pipe:  
[water flow through a pipe 4" diameter](https://wolfreealpha.github.io/#water%20flow%20through%20a%20pipe%204%22%20diameter)
