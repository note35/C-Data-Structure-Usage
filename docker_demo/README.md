1.pull image

    docker pull centos:latest


2.run image

    docker run -it <image_id>
    *--net=[bridge|host|container|none]
    *-p=[port:port]

3.start container

    docker start <container_id>

4.remove container

    docker rm <container_id>

    #remove all exit container
    docker rm $(docker ps -q -f status=exited)

5.run command in container

    docker exec -it <container_id> <command>

6.back to running container

    docker attach <container_id>

7.remove image

    docker rmi <image_id>

8.commit to image

    docker commit -m "commit_msg" -a "author" container_id author_id/image_name


9.build image from Dockerfile

    docker build -t author_id/image_name dir_of_dockerfile


Documentation:

    [--net](https://philipzheng.gitbooks.io/docker_practice/content/underly/network.html)
    [-p](http://dockone.io/article/152)

**MacOS**

    $ docker-machine create default
    $ docker-machine start
