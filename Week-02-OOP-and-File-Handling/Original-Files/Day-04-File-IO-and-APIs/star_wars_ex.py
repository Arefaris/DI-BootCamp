import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(f'{dir_path}/starwars.txt', 'a+') as sw_f:
    #bullet1
    # while True:
    #     line = sw_f.readline()
    #     if not line:
    #         break
    #     print(line)

    #bullet2
    # output = sw_f.readlines()
    # print(output[4])

    #bullet4
    sw_f.seek(0)
    list_str = sw_f.readlines()
    # print(list_str)
    
    for i, name in enumerate(list_str):
        if name == 'Luke\n':
            # sw_f.write(f'{name} Skywalker')
            list_str[i] = f'{name} Skywalker'

        
        print(list_str)
        

        # if line == 'Luke\n':
            


