<template>
    <q-layout view="hHh lpR fFf">

        <q-header reveal elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="../images/sombrero-de-graduacion.png">
                    </q-avatar>
                    Cursos
                </q-toolbar-title>
            </q-toolbar>

            <q-tabs align="left">
                <q-route-tab to="/gradosexto" label="Grado Sexto" />
                <q-route-tab to="/gradoseptimo" label="Grado Séptimo" />
                <q-route-tab to="/gradooctavo" label="Grado Octavo" />
                <q-route-tab to="/gradonoveno" label="Grado Noveno" />
                <q-route-tab to="/gradodecimo" label="Grado Décimo" />
                <q-route-tab to="/gradoonce" label="Grado Once" />
            </q-tabs>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>