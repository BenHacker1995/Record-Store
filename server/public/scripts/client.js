let recordApp = angular.module( 'recordApp', [] );

recordApp.controller( 'RecordController', ['$http', function( $http ){
    let vm = this;
    vm.records = [];
    
    vm.addRecord = function( record ) {
        let newRecord = {
            artist: vm.artistIn,
            album: vm.albumIn,
            year: vm.yearIn,
            genre: vm.genreIn
        }
        $http( {
            method: 'POST',
            url: '/record',
            data: newRecord
        }).then( function( response ) {
            console.log( 'Adding record as ', response );
            vm.getRecords();
        }).catch( function( error ) {
            console.log( `Oh no!, error occurred: `, error );
        });
        vm.artistIn = '';
        vm.albumIn = '';
        vm.yearIn = '';
        vm.genreIn = '';
    } // end addRecord
    
    vm.getRecords = function() {
        $http( {
            method: 'GET',
            url: '/record'
        }).then( function( response ) {
            console.log( 'Got response from server: ', response );
            vm.records = response.data;
        }).catch( function( error ) {
            console.log( 'Error in GET: ', error );  
        });
    } // end getRecords

    vm.removeRecord = function( index ) {
        let recordToDelete = vm.records[index];
        $http( {
            method: 'DELETE',
            url: `/record/?id=${recordToDelete.id}`
        }).then( function( response ) {
            console.log( 'DELETE successful for: ', response );
            vm.getRecords();
        }).catch( function( error ) {
            console.log( 'Error occured: ', error );
        })
    } // end removeRecord
    console.log( 'RecordController is created' );
    vm.getRecords();
}]); // end controller
