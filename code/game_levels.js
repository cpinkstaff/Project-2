var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx                  x!!!x          ",
   "                y                                                xx!xx          ",
   "                                   xxxxx                          xvx           ",
   "                                                                            xx  ",
   "  xx                                      o o                                x  ",
   "  x            *        o                               y    c               x  ",
   "  x                                      xxxxx                             o x  ",
   "  x          xxxx       o                                                    x  ",
   "  x  @       xyyx                                    x            xxxx       x  ",
   "  xxxxx    xxxyyxxxxxxxxxxxxxxx   xxxxxxx                  xxxx        xxxxxxx  ",
   "      x!!!!x                  x   x     x!!!!!!!!!!!!!!!!!!x                    ",
   "      x!!!!x                  x!!!x     x!!!!!!!!!!!!!!!!!!x                    ",
   "      xxxxxx                  x!!!x     x!!!!!!!!!!!!!!!!!!x                    ",
   "                              xxxxx     xxxxxxxxxxxxxxxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                                                                   x!x  ",
   "                                      x!!x    o                                                              x!x  ",
   "                                xxxxxxx!!xxxxxxxxxx                                                          x!x  ",
   "                                x!!!!!!!!!!!!!!!!!!xx                                                        x!x  ",
   "                                x!!xxxxxxxxxxxxxxx!!x                                             o   o   o  x!x  ",
   "                                x!x             xx!x     x         o   o                       =            xx!x  ",
   "                                x!x              x!x                                          xxxxxxxxxxxxxxx!!x  ",
   "                                xvx              xvx               x   x                  !!!!!!!!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx           !xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "                                                               xxxx!!!!!xxxx                                      ",
   "                                               x                  xxxxxxx        xxx         xxx                  ",
   "                                               x                                 x x         x x                  ",
   "                                               x     x                             x         x                    ",
   "                                               x     x                       x     xx        x                    ",
   "              c                                xo    x                             x         x                    ",
   "                                               x     x      o  o     x   x         x         x                    ",
   "                                               xx    x               x   x         x         x                    ",
   "                                               x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "                                               x     x               x   x   x               x                    ",
   "     @                                         x    ox               x   x   x               x                    ",
   "    xxx                                        x    xx               x   xxxxx   xxxxxx      x                    ",
   "    x x     c    o                             x     x               x     o     xxxxxx     xx                    ",
   "                xxx                            x     x               xx     =     xxxx        x                   ",
   "                                               xo    x                xxxxxxxxxxxxx xx  o o  xx                   ",
   "                                               xx    x                               xx     xx                    ",
   "                              * o              x     x                                xxxxxxx                     ",
   "                            xxxxxx                   x                                                            ",
   "                                                    xx                                                            ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                             "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                    c                               ",
   "                                       x!x                 !!!        !!!  xxxxxx                             ",
   "                                       x!x                 !x!        !x!                x                    ",
   "                                     xxxvxxx                x          x                 v                    ",
   "                                      x                     x   oooo   x                                      ",
   "                                      x                     x          x             x                        ",
   "                                      x   x                 xxxxxxxxxxxx                                      ",
   "                                     xx   xx      x   x      x                x                               ",
   "                                      x  xxxxxxxxxx   xxxxxxxx                v                               ",
   "                                      x   x           x                              x                        ",
   "                                      x   x           x                              v                        ",
   "                                     xx  xxx          x                                                       ",
   "                                      x   x= = = =    x                                    x                  ",
   "                                      x   x           x                                    v                  ",
   "                                      x   x    = = = =x     o                      x                          ",
   "                                     xx  xxx          x                                                       ",
   "                              o   o       x           x     x                                                 ",
   "                                          x           x              x      x                                 ",
   "                          xxxxxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                                        ",
   "                         x   x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                 x           xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x         x                 x           x                              x   x                             x  ",
   "  x                           xx          x              =               x x x                             x  ",
   "  x                           x           x       |xxxx|    |xxxx|      xx xxx                             x  ",
   "  x                xxx        x    o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x            o          o     x x        xxx          xxx        x  ",
   "  x           *    xxx        xxxxxxxxxxxxx  x    x    x    x    x     xx xx                    xxx        x  ",
   "  x=     @          =         x           x!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                         x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx              x               x             =                           =       x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                                                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                               x          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "              v           v           v                                                                       ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                  c                                                              ",
   "  x                                                                                       x                   ",
   "  x                                                       ||                  x     x                         ",
   "  x  @             o           o                                                                              ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                     *             =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],
   ["                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "        !!    !!   !!!!    !      !    !     !   !!!!!  !!    !                 ",
    "         !!  !!   !    !   !      !    !  !  !     !    ! !   !                 ",
    "           !!    !      !  !      !    ! ! ! !     !    !  !  !                 ",
    "           !!     !    !   !      !    !!   !!     !    !   ! !                 ",
    "           !!      !!!!     !!!!!!     !     !   !!!!!  !    !!                 ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "  xx                                                                            ",
    "  x                                                                             ",
    "  x                                                                             ",
    "  x                                                                             ",
    "  x  @                                                                          ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                "],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
