Día 3 — Provisionamiento con Vagrant (Guía ampliada)
1. Qué es el provisionamiento
Provisionar significa crear y configurar infraestructura automáticamente.

Antes de la automatización el proceso era manual:

Crear VM
Instalar paquetes
Configurar servicios
Abrir puertos

Con herramientas DevOps el proceso se automatiza:

Ejecutar script
↓
VM creada y configurada automáticamente

Este concepto forma parte de Infrastructure as Code (IaC).

Infrastructure as Code significa que la infraestructura se define mediante código y puede reproducirse automáticamente.

2. Qué es Vagrant
Vagrant es una herramienta que permite crear entornos virtuales reproducibles mediante archivos de configuración.

Ventajas:

entornos reproducibles
automatización
desarrollo local similar a producción
fácil destrucción y recreación
Arquitectura:

Vagrant
↓
Provider (VirtualBox / VMware / Hyper-V)
↓
Máquina virtual Linux

3. Cómo funciona Vagrant
Todo se controla mediante un archivo llamado:

Vagrantfile

Este archivo define:

sistema operativo
recursos de la máquina
configuración de red
scripts de provisionamiento
Ejemplo básico de Vagrantfile:

Vagrant.configure("2") do |config| config.vm.box = "ubuntu/jammy64" end

4. Instalación
Instalar VirtualBox
Descargar desde:

https://www.virtualbox.org

Instalar Vagrant
En Ubuntu:

sudo apt update
sudo apt install vagrant

Comprobar instalación:

vagrant --version

5. Crear tu primera VM con Vagrant
Crear directorio del laboratorio:

mkdir vagrant-lab
cd vagrant-lab

Inicializar proyecto:

vagrant init ubuntu/jammy64

Esto crea el archivo:

Vagrantfile

6. Levantar la máquina virtual
Ejecutar:

vagrant up

Esto hace automáticamente:

descarga de la imagen
creación de la VM
configuración de red
arranque del sistema
7. Conectarse a la máquina virtual
vagrant ssh

Prompt típico dentro de la VM:

vagrant@ubuntu-jammy:~$

8. Verificar el sistema dentro de la VM
Información del sistema
uname -a

Ejemplo de salida:

Linux ubuntu-jammy 5.15.0-171-generic x86_64 GNU/Linux

Esto muestra:

sistema operativo
versión del kernel
arquitectura
Memoria del sistema
free -h

Ejemplo:

Mem: 957Mi

Esto indica que la VM tiene aproximadamente 1 GB de RAM.

Espacio en disco
df -h

Salida importante:

/dev/sda1 39G

Esto significa:

disco virtual de 39 GB
poco espacio usado
9. Carpeta compartida /vagrant
Dentro de la VM existe una carpeta especial:

/vagrant

Esta carpeta sincroniza archivos entre:

PC Host
↓
carpeta vagrant-lab
↓
VM Ubuntu
↓
/vagrant

Esto permite compartir archivos entre host y VM.

Ejercicio práctico
Dentro de la VM:

cd /vagrant
ls

Crear archivo:

echo "hola desde la VM" > prueba.txt

Salir de la VM:

exit

El archivo aparecerá en tu carpeta del host.

10. Comandos importantes de Vagrant
Iniciar VM:

vagrant up

Conectarse:

vagrant ssh

Ver estado:

vagrant status

Detener VM:

vagrant halt

Reiniciar VM:

vagrant reload

Destruir VM:

vagrant destroy

Este último elimina completamente la máquina virtual.

11. Configurar recursos de la VM
Editar el archivo Vagrantfile y añadir:

config.vm.provider "virtualbox" do |vb| vb.memory = "2048" vb.cpus = 2 end

Esto asigna:

2 GB RAM
2 CPUs

Aplicar cambios:

vagrant reload

12. Provisionamiento automático
Vagrant puede ejecutar scripts automáticamente.

Ejemplo:

config.vm.provision "shell", inline: <<-SHELL sudo apt update sudo apt install -y nginx SHELL

Cuando ejecutes:

vagrant up

Nginx se instalará automáticamente.

13. Ejercicio avanzado
Crear dos servidores virtuales:

web
db

Ejemplo de configuración:

Vagrant.configure("2") do |config|

config.vm.define "web" do |web| web.vm.box = "ubuntu/jammy64" web.vm.network "private_network", ip: "192.168.56.10" end

config.vm.define "db" do |db| db.vm.box = "ubuntu/jammy64" db.vm.network "private_network", ip: "192.168.56.11" end

end

Levantar infraestructura:

vagrant up

Esto crea dos máquinas virtuales conectadas en red.

14. Por qué esto es importante en DevOps
Este laboratorio introduce conceptos clave:

Infrastructure as Code
automatización
infraestructura reproducible
infraestructura versionada

Antes:

"En mi máquina funciona"

Con DevOps:

Todos trabajan con la misma infraestructura definida por código.

15. Uso en empresas
Vagrant se utiliza principalmente para:

entornos de desarrollo
pruebas
simulación de infraestructura
Los conceptos aprendidos se aplican después en:

Terraform Ansible Docker Kubernetes

16. Qué se ha aprendido en el Día 3
Provisionamiento Infrastructure as Code Virtualización Automatización de infraestructura Uso de Vagrant Creación de máquinas virtuales reproducibles
