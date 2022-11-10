echo "4)Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando."
docker build -t hello .
docker run hello

#< MUUUUh >
# --------
#        \   ^__^
#         \  (oo)\_______
#            (__)\       )\/\
#                ||----w |
#                ||     ||
echo "5) Execute um novo container passando sua mensagem para testar."

docker run hello -f dragon-and-cow "firebolto"

# < firebolto >
#  -----------
#                        \                    ^    /^
#                         \                  / \  // \
#                          \   |\___/|      /   \//  .\
#                           \  /O  O  \__  /    //  | \ \           *----*
#                             /     /  \/_/    //   |  \  \          \   |
#                             @___@`    \/_   //    |   \   \         \/\ \
#                            0/0/|       \/_ //     |    \    \         \  \
#                        0/0/0/0/|        \///      |     \     \       |  |
#                     0/0/0/0/0/_|_ /   (  //       |      \     _\     |  /
#                  0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\.-~       /   /
#                              ,-}        _      *-.|.-~-.           .~    ~
#             \     \__/        `/\      /                 ~-. _ .-~      /
#              \____(oo)           *.   }            {                   /
#              (    (--)          .----~-.\        \-`                 .~
#              //__\\  \__ Ack!   ///.----..<        \             _ -~
#             //    \\               ///-._ _ _ _ _ _ _{^ - - - - ~