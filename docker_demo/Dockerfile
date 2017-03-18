# CentOS + python3.6 + nginx

FROM centos:latest
MAINTAINER Kir Chou <note351@hotmail.com>

# Update yum
RUN yum -y update

# Install dependencies
RUN yum groupinstall -y "Development tools"
RUN yum install -y zlib-devel bzip2-devel openssl-devel sqlite-devel

# Install wget
RUN yum install -y wget

# Install Python 3.6.1
RUN wget http://python.org/ftp/python/3.6.1/Python-3.6.1rc1.tar.xz
RUN tar xf Python-3.6.1rc1.tar.xz
WORKDIR Python-3.6.1rc1
RUN ./configure --prefix=/usr/local --enable-shared LDFLAGS="-Wl,-rpath /usr/local/lib"
RUN make && make altinstall
WORKDIR ..
RUN rm -rf Python-3.6.1rc1 Python-3.6.1rc1.tar.xz

# Install virtualenv
RUN pip3.6 install virtualenv

# Install nginx
RUN yum install -y epel-release
RUN yum install -y nginx
